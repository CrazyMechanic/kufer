import { Component } from '@angular/core';
import { ToggleFilter } from './servises/toggle-profile-editing';

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
  isFavoriteVisible: boolean = false;
  
  constructor(public toggleFilter: ToggleFilter) {
  }

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

  toggleFavorite(event: Event): void {
    event.preventDefault();
    this.isFavoriteVisible = !this.isFavoriteVisible;
  }
}
