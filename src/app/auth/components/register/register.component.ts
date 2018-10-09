import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg = true;
  links = ['Step 1', 'Step 2'];
  activeLink = this.links[0];
  firstanswer: any;
  secondanswer: any;
  signupForm: FormGroup;
  securityquestions: FormGroup;
  genders = ['male', 'female'];
  forbiddenUserName = ['sowmi', 'hannah'];
  message: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
      'companyname': new FormControl(),
      'contact': new FormControl()
    });
    this.securityquestions = new FormGroup({
      'firstanswer': new FormControl(),
      'secondanswer': new FormControl(),
    });
    this.userService.getAllQuestions()
  }
  onSubmit() {
    console.log(this.signupForm);
    this.userService.addUser(this.signupForm.value.firstname,
      this.signupForm.value.lastname,
      this.signupForm.value.email, this.signupForm.value.password,
      this.signupForm.value.companyname,
      this.signupForm.value.contact)
      .subscribe((res) => {
        if (res) {
          const result = res['userDetails'];
          this.message = "Inserted Successful";
          console.log(result);
        }
      });
    this.reg = false;
  }
  secretanswers() {
    console.log(this.securityquestions);
  }
  nextfn() {
    console.log(this.signupForm);
    this.reg = false;
    this.activeLink = this.links[1];

  }
}
