import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
  isSignUpActive: boolean = false;
  isLoginActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSignUpActive = event.url === '/sign-up';
        this.isLoginActive = event.url === '/login';
      }
    });
  }
}
