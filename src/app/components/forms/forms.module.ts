import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsRoutingModule} from './forms-routing.module';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {FormContainerComponent} from "./form-container/form-container.component";

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    FormContainerComponent,
  ],
  exports: [
    SignUpComponent,
    LoginComponent,
    FormContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
  ],
})
export class FormsModule {
}
