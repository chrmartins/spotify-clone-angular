import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRotas } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRotas)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
