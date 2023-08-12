import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  exports: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
  ],
})
export class FormsModule {
}
