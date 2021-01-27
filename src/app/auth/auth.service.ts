import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserModel } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);

  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0xeXQwGRV2lySsceAyeIyofCA9u5XSOo',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0xeXQwGRV2lySsceAyeIyofCA9u5XSOo',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const userN = new UserModel(email, userId, token, expirationDate);
    this.user.next(userN);
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorM = 'An unknown error occurred';
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
