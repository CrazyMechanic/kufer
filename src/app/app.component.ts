import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kufer';

  isFormVisible: boolean = false;
  
  toggleForm(event: Event) {
    event.preventDefault();
    this.isFormVisible = !this.isFormVisible;
  }

}
