import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsRoutingModule} from './forms-routing.module';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
  ],
  exports: [
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
  ],
})
export class FormsModule {
}
