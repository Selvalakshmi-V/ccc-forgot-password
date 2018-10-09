import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  apiUrl = environment.apiUrldb;

  constructor(private http: HttpClient,
  ) { }

  sendEmail(email) {
    return this.http.post(this.apiUrl + 'v1/sendEmail', email);
  }

  resetPassword(token) {
    return this.http.post(this.apiUrl + 'v1/resetPassword', token);
  }
}
