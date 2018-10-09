import { EmailService } from './../../services/email.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  apiUrl = environment.apiUrldb;
  token;
  one = false;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private emailService: EmailService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
    console.log(this.token);
    const token = {
      token: this.token
    }
    console.log(token);
    // return this.emailService.resetPassword(token).subscribe((res) => {
    //   console.log(res);
    //   if (res['response'] && res['response'] === 'success') {
    //     this.one = true;
    //   }
    //   else {
    //     console.log(res['response']);
    //   }
    // })
  }

}
