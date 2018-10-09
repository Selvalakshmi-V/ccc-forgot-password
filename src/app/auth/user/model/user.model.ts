/**
 * Class which is used to declare user property
 */
export class User {
  /**
   * Variable which is used to define the unique id
   * @type {number}
  */
  public id: number;
  /**
   * Variable which is used to define the user id
   * @type {string}
  */
  public userId: string;
  /**
  * Variable which is used to define the user first name
  * @type {string}
 */
  public firstName: string;
  /**
   * Variable which is used to define the userlast  name
   * @type {string}
  */
  public lastName: string;
  /**
  * Variable which is used to define the user email id
  * @type {string}
  */
  public email: string;
  /**
  * Variable which is used to define the customer company Name.
  * @type {string}
  */
  public companyName: string;
  /**
  * Variable which is used to define the user status
  * @type {number}
  */
  public active: number;
  /**
  * Variable which is used to define the user role id
  * @type {number}
  */
  public userRoleId: number;
  /**
   * Variable which is used to define the date of user created.
   * @type {number}
  */
  public created: Date;
  /**
   * Variable which is used to define the date of user details last modified.
   * @type {number}
  */
  public modified: Date;
  /**
   * Class constructor with required user fields
   * @param userId {number} To define the user id
   * @param email {string} To define the user email
   * @param role {string} To define the user role
   * @param firstName {string} To define the user firstname
   * @param lastNameto {string} define the user lastname
   * @param userRoleId {number} To define the user role id
   * @param customerId {number} To define the user customer id
   */
  constructor(userId: string, email: string, firstName: string, lastName: string, companyName: string, userRoleId: number) {
    this.userId = userId;
    this.email = email;
    this.firstName = firstName;
    this.lastName =  lastName;
    this.userRoleId = userRoleId;
    this.companyName = companyName;
  }
}
/**
 * Variable which is used to define the initial value of the user model
 * @type {User[]}
 */
export const initialUserModel: User[] = [];

