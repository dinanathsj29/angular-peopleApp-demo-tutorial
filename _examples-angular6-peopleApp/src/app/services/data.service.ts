import { Injectable } from '@angular/core';
// httpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public api url path to get user data
  private urlUsersData = 'https://jsonplaceholder.typicode.com/users';
  private urlUserData = 'https://jsonplaceholder.typicode.com/users/';
  private urlPostsData = 'https://jsonplaceholder.typicode.com/posts';

  //create an instance of it through dependency injection within the constructor
  constructor(private httpClient: HttpClient) { }

  //get users data from public api 
  getUsersData() {
    // default returns of get/post & other rest api method is 'OBSERVABLEs'
    // return this.httpClient.get(this.urlUsersData);

    // return PROMISE with .toPROMISE() method
    return this.httpClient.get(this.urlUsersData).toPromise();
  }

  //get single user data from public api 
  getUserData(_userId) {
    // default returns of get/post & other rest api method is 'OBSERVABLEs'
    // return this.httpClient.get(this.urlUserData+_userId);

    // return PROMISE with .toPROMISE() method
    return this.httpClient.get(this.urlUserData+_userId).toPromise();
  }

  //get posts data from public api 
  getPostsData() {
    // default returns of get/post & other rest api method is 'OBSERVABLEs'
    // return this.httpClient.get(this.urlPostsData);

    // return PROMISE with .toPROMISE() method
    return this.httpClient.get(this.urlPostsData).toPromise();
  }


}
