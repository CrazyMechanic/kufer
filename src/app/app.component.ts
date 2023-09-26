import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kufer';

  isFormVisible: boolean = false;
  isItemVisible: boolean = false;
  isHomeVisible: boolean = false;
  isProfileVisible: boolean = false;
  isProductCardVisible: boolean = false;

  toggleForm(event: Event) {
    event.preventDefault();
    this.isFormVisible = !this.isFormVisible;
  }

  toggleItem(event: Event): void {
    event.preventDefault();
    this.isItemVisible = !this.isItemVisible;
  }

  toggleHome(event: Event): void {
    event.preventDefault();
    this.isHomeVisible = !this.isHomeVisible;
  }

  toggleProfile(event: Event): void {
    event.preventDefault();
    this.isProfileVisible = !this.isProfileVisible;
  }

  toggleProductCard(event: Event): void {
    event.preventDefault();
    this.isProductCardVisible = !this.isProductCardVisible;
  }

}
