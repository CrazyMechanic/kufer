import { Component } from '@angular/core';
import { FORM_LABEL } from '../../data/form-data';
import { ToggleProfileEditing } from '../../servises/toggle-profile-editing';

@Component({
  selector: 'app-profile-editing',
  templateUrl: './profile-editing.component.html',
  styleUrls: ['./profile-editing.component.scss'],
})
export class ProfileEditingComponent {

  label = FORM_LABEL;

  constructor(public toggleProfileEditing: ToggleProfileEditing) {
  }

  closeEditing(): void {
    this.toggleProfileEditing.isProfileEditingVisible = false;
  }
}
