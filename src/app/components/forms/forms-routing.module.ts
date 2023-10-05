import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FormContainerComponent,
  //   children: [
  //     {path: 'sign-up', component: SignUpComponent},
  //     {path: 'login', component: LoginComponent},
  //     {path: '', redirectTo: 'sign-up', pathMatch: 'full'},
  //   ],
  // },
  // {path: 'sign-up', component: SignUpComponent},
  // {path: 'login', component: LoginComponent},
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {
}
