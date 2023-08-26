import {Component} from '@angular/core';
import {FORM_PLACEHOLDERS} from "../../../data/form-data";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  placeholder = FORM_PLACEHOLDERS
}
