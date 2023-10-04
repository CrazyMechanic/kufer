import { Component } from '@angular/core';
import { FORM_PLACEHOLDERS } from '../../../data/form-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  placeholder = FORM_PLACEHOLDERS;

//   TODO hash почему то логин стоит и в роутере открывает логин
}
