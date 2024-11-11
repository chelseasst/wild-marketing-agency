import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUsComponent } from './why-us/why-us.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    WhyUsComponent
  ],
  imports: [
    CommonModule,TranslateModule
  ],
  exports:[WhyUsComponent]
})
export class WhyUsModule { }
