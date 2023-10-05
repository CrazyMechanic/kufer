import { Component } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  styles: [`
    .active-bg {
      color: #FFFFFF;
      background-color: #00478F;
    }
  `],
})
export class FormContainerComponent {
  // isSignUpActive: boolean = false;
  // isLoginActive: boolean = false;

  isSignUpVisible: boolean = false;
  isLoginVisible: boolean = true;

  // isLoginVisible: boolean = false;

  toggleSignUp(event: Event) {
    event.preventDefault();
    this.isSignUpVisible = !this.isSignUpVisible;
    this.isLoginVisible = false;
  }

  toggleLogin(event: Event) {
    event.preventDefault();
    this.isLoginVisible = !this.isLoginVisible;
    this.isSignUpVisible = false;
  }

  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.isSignUpActive = event.url === '/sign-up';
  //       this.isLoginActive = event.url === '/login';
  //     }
  //   });
  // }
}
