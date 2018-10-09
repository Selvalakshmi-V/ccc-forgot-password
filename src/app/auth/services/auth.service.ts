
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from '../user/model/user.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../../common/components/services/header.service';



/**
 * Class which is used to signin and signout the application.
 */
@Injectable()
export class AuthService {
  /**
   * Variable which is used to define the url of the api from environment variable.
   * @type {string}
   */
  apiUrl = environment.apiUrldb;
  /**
   * Variable which is used to define the token of the current user.
   * @type {string}
   */
  token: string;

  /**
  * Constructor used to inject the required services.
  * @param http To access the httpclient service.
  * @param offlineStorage To get the offline database.
  * @param headerService To access and handle the httpHeaders in the requests.
  */
  constructor(private http: HttpClient,
    private headerService: HeaderService) { }

  /**
   * Method which is used to signin the application for given login details.
   * @param email {string}
   * @param password {string}
   */
  signinUser(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };
    return this.http.post(this.apiUrl + 'v1/login', data).pipe(map((res) => {
      if (res && res['token']) {
        this.token = res['token'];
        if (res['user']) {
          // Define the user model structure
          const user = {
            firstName: res['user'].firstName,
            lastName: res['user'].lastName,
            email: res['user'].email,
            userId: res['user'].userId,
            role: res['userRole'],
            userRoleId: res['user'].userRoleId,
            customerId: res['user'].customerId,
            id: res['user'].id
          };
          // Store the token and user datails into local storage.
          localStorage.setItem('currentUser', JSON.stringify({ token: this.token, user: user }));
        }
      }
      return res;
    }));
  }
  // /**
  //  * Method which is used to signout the user.
  //  * @return {boolean}
  //  */
  // logout() {
  //   // Remove the current user details from local storage.
  //   localStorage.removeItem('currentUser');
  //   this.token = null;

  //   // Remove the authentication details from the request.
  //   this.headerService.clearHeaders('default', 'Authorization');
  //   return true;
  // }

}
