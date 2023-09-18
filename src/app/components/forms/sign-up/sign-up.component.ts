import { Component } from '@angular/core';
import { FORM_LABEL, FORM_PLACEHOLDERS } from '../../../data/form-data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  styles: [`
    .hidden {
      display: none;
    }
  `],
})
export class SignUpComponent {
  placeholder = FORM_PLACEHOLDERS;
  label = FORM_LABEL;
  labelVisibility: Record<string, boolean> = {
    name: false,
    lastName: false,
    email: false,
    phone: false,
    password: false,
    confirm: false,
  };

  toggleLabel(inputName: string): void {
    this.labelVisibility[inputName] = !this.labelVisibility[inputName];
  }

  toggleVisibility(): void {
    //   TODO password visibility
  }
}
