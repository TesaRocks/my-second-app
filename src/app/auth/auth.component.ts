import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}
  isLogMode = true;
  isLoading = false;
  error: string = null;

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let obsAuth: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLogMode) {
      obsAuth = this.authService.login(form.value.email, form.value.password);
    } else {
      obsAuth = this.authService.signup(form.value.email, form.value.password);
    }
    obsAuth.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
      },
      (errorMessage: string) => {
        console.log(errorMessage);
        this.error = errorMessage;

        this.isLoading = false;
      }
    );

    form.reset();
  }
  onSwitchMode() {
    this.isLogMode = !this.isLogMode;
  }
}
