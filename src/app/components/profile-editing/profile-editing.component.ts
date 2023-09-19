import { Component } from '@angular/core';
import { FORM_LABEL } from '../../data/form-data';

@Component({
  selector: 'app-profile-editing',
  templateUrl: './profile-editing.component.html',
  styleUrls: ['./profile-editing.component.scss'],
})
export class ProfileEditingComponent {

  label = FORM_LABEL;
  // labelVisibility: Record<string, boolean> = {
  //   name: false,
  //   lastName: false,
  //   email: false,
  //   phone: false,
  //   password: false,
  // };
}
