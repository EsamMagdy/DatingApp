import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  bseUrl = 'https://localhost:5001/api/';
  
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<User>(this.bseUrl + 'Account/Login', model).pipe(
      map((response) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
