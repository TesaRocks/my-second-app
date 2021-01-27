import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}
  isLogMode = true;
  isLoading = false;

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    if (this.isLogMode) {
    } else {
      this.authService.signup(form.value.email, form.value.password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
  onSwitchMode() {
    this.isLogMode = !this.isLogMode;
  }
}
