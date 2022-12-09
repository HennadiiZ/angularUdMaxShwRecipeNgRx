import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AuthService } from 'src/app/_services/auth.service';
import { PlaceholderDirective } from 'src/app/_directives/placeholder.directive'
import { take } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  loader = false;
  errorMessage: string = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm): void {
    if (!authForm.valid) {
      return;
    }

    this.loader = true;
    const form = authForm.value;

    if (this.isLoginMode) {
      this.authService.signUp(form.email, form.password)
      .subscribe(
        (value: any) => {
          // console.log(value);
          this.loader = false;
          this.router.navigate(['/recipes']);
        },
        error => {
          this.showErrorAlert(error.error.error.message);
          console.log(error.error.error.message);
          this.errorMessage = error.error.error.message;
          this.loader = false;
        }
      );
    } else {
      this.authService.signIn(form.email, form.password)
      .subscribe(
        (value: any) => {
          // console.log(value);
          this.loader = false;
          // this.router.navigate(['']);
          this.router.navigate(['/recipes']);
        },
        error => {
          this.showErrorAlert(error.error.error.message);
          console.log(error);
          this.errorMessage = error.error.error.message;
          this.loader = false;
        }
      );
    }
    // console.log(authForm);
    // console.log(authForm.value);
    authForm.reset();
  }

  // closeAlert(): void {
  //   this.errorMessage = null;
  // }

  onHandleError(): void {
    this.errorMessage = null;
  }

  private showErrorAlert(message: string): void {
    // const alertComponent = new AlertComponent();
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);

    componentRef.instance.message = message;
    componentRef.instance.close.pipe(
      // take(1)
    ).subscribe(() => {
      hostViewContainerRef.clear();
    })
  }
}
