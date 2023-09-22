import { Component } from '@angular/core';
import { TogglePasswordEditing, ToggleProfileEditing } from '../../servises/toggle-profile-editing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  constructor(public toggleProfileEditing: ToggleProfileEditing,
              public togglePasswordEditing: TogglePasswordEditing) {
  }

}
