import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  authData: any;
  authSubscription: any;
  errorMsg: any;
  error: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl(null, Validators.required)
      });
  }
  onSubmit() {
   this.authData = this.loginForm.value;
   console.log(this.authData);
  }
  onSignin() {
    if (this.authData) {
      const email = this.authData.email;
      const password = this.authData.password;
      // Login into the application when network is available
      this.authSubscription = this.authService.signinUser(email, password).subscribe((res) => {
        // If authentication is passed then navigate to home page
        console.log('signin successful!');
        // this.router.navigate(['app/home']);
      }, (err) => {
        if (err.error && err.error.error) {
          this.errorMsg = err.error.error;
          this.error = true;
        }
      });
    }
  }
}
