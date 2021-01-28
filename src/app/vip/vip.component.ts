import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VipService } from './vip.service';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css'],
})
export class VipComponent implements OnInit {
  isVip = true;
  error: string;
  isLoading = false;
  constructor(private vipService: VipService, private router: Router) {}

  ngOnInit(): void {}
  onSub(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    if (!this.isVip) {
      this.vipService.signup(form.value.email, form.value.password).subscribe(
        (resData) => {
          this.isLoading = false;
          this.router.navigate(['/vipPage']);
        },
        (errorMessage: string) => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
  onSwitch() {
    this.isVip = !this.isVip;
  }
}
