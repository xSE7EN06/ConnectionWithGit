import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeQrBrrsPageRoutingModule } from './code-qr-brrs-routing.module';

import { CodeQrBrrsPage } from './code-qr-brrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeQrBrrsPageRoutingModule
  ],
  declarations: [CodeQrBrrsPage]
})
export class CodeQrBrrsPageModule {}
