import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,TranslateModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
