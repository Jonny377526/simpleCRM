import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name: string;
  email: string;
  phonenumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User>{

    const headers2 = new HttpHeaders({
      'content type': 'application/json ',
      'authenticationToken': '1234565'
    });

    const params2 = new HttpParams()
    .set('pageNum', '10')
    .set('pageSize', '100');

    return this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users', { headers: headers2, params: params2});
    

    /*
    const users = [
      {usersId: 10, userName: 'YouTube'},
      {usersId: 20, userName: 'Instagram'}
    ];

    return users;
    */
  }
}
