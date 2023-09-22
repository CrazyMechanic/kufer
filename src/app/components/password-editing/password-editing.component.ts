import { Component } from '@angular/core';
import { FORM_LABEL } from '../../data/form-data';
import { TogglePasswordEditing } from '../../servises/toggle-profile-editing';

@Component({
  selector: 'app-password-editing',
  templateUrl: './password-editing.component.html',
  styleUrls: ['./password-editing.component.scss'],
})
export class PasswordEditingComponent {
  label = FORM_LABEL;

  constructor(public togglePasswordEditing: TogglePasswordEditing) {
  }

  closeEditing(): void {
    this.togglePasswordEditing.isPasswordEditingVisible = false;
  }
}
