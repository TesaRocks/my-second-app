import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthResponseData } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class VipService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0xeXQwGRV2lySsceAyeIyofCA9u5XSOo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0xeXQwGRV2lySsceAyeIyofCA9u5XSOo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorM = 'An unknown error ocurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorM);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorM = 'This email already is in use';
        break;
      case 'EMAIL_NOT_FOUND':
        errorM = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorM = 'Invalid Password';
        break;
    }
    return throwError(errorM);
  }
}
