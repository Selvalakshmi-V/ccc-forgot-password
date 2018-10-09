import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  apiUrl = environment.apiUrldb;
  userDetails: any;
  email: any
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isCompleted = false;
  isCompleted1 = false;
  temp: boolean = false;
  temp1: boolean = false;
  @ViewChild('stepper') stepper;


  constructor(private _formBuilder: FormBuilder,
    private http: HttpClient,
    private emailService: EmailService,
    private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.secondFormGroup = this._formBuilder.group({
      answer1: ['', Validators.required],
      answer2: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({

    });
  }

  doSomething(event) {
    console.log(event);
  }

  getEmail(form: FormGroup) {
    console.log(this.stepper);
    this.email = {
      email: form.value.email
    }
    return this.http.post(this.apiUrl + 'v1/getUser', this.email).subscribe((res) => {
      if (res && res['userDetails']) {
        this.temp1 = false;
        const user = res['userDetails'];
        this.userDetails = user;
        console.log(this.userDetails);
        this.isCompleted = true;
        console.log('Before ' + this.stepper.selectedIndex);
        // this.stepper.selectedIndex = 1;
        console.log('After ' + this.stepper.selectedIndex);
      }
      else {
        console.log(this.stepper.selectedIndex);
        this.isCompleted = false;
        this.temp1 = true;
      }
    });
  }

  verifyAnswers(form: FormGroup) {
    console.log(this.stepper);
    if (form.value.answer1 === this.userDetails.answers[0].answerText && form.value.answer2 === this.userDetails.answers[1].answerText) {
      console.log('true');
      this.isCompleted1 = true;
      this.temp = false;
      return this.emailService.sendEmail(this.email).subscribe((res) => {
        if (res['response'] && res['response'] === 'error') {
          console.log('error');
          this.router.navigate(['/forgotPassword']);
        }
        else if (res['response'] && res['response'] === 'success') {
          console.log('success');
          this.router.navigate(['/forgotPassword']);
        }
      });
    }
    else {
      console.log('false');
      this.isCompleted1 = false;
      this.temp = true;
    }
  }

  resendLink() {
    return this.emailService.sendEmail(this.email).subscribe((res) => {
      if (res['response'] && res['response'] === 'error') {
        console.log('error');
        this.router.navigate(['/forgotPassword']);
      }
      else if (res['response'] && res['response'] === 'success') {
        console.log('success');
        this.router.navigate(['/forgotPassword']);
      }
    });
  }
}

