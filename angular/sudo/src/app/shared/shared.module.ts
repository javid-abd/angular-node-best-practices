import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMessageComponent } from './messages/auth-message/auth-message.component';

@NgModule({
  declarations: [ AuthMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [],
})

export class SharedModule { }
