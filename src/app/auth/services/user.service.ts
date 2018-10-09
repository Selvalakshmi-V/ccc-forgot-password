import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  apiUrl = environment.apiUrldb;
  constructor(private http: HttpClient) { }
  addUser(firstname: string, lastname: string, email: string, password: string, companyname: string, contact: string) {
    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      companyName: companyname,
      contactNumber: contact
    };
    return this.http.post(this.apiUrl + 'v1/adduser', data);
  }
  getAllQuestions() {

  }
}
