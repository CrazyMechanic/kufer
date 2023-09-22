import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAnItemComponent } from './components/create-an-item/create-an-item.component';
import { FormsModule } from '@angular/forms';
import { FormModule } from './components/forms/form.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditingComponent } from './components/profile-editing/profile-editing.component';
import { TogglePasswordEditing, ToggleProfileEditing } from './servises/toggle-profile-editing';
import { PasswordEditingComponent } from './components/password-editing/password-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAnItemComponent,
    HomeComponent,
    ProfileComponent,
    ProfileEditingComponent,
    PasswordEditingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormModule,
  ],
  providers: [
    ToggleProfileEditing,
    TogglePasswordEditing,
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
