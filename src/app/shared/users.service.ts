import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<User[]>(environment.pathApi + 'users/');
  }



  deleteUsers(userId: number) {
    return this.http.delete<User[]>(environment.pathApi + 'users/'+userId);
  }
}