import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps/steps.component';
import { StepsMobileComponent } from './steps-mobile/steps-mobile.component';
import { StepsDesktopComponent } from './steps-desktop/steps-desktop.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    StepsComponent,
    StepsMobileComponent,
    StepsDesktopComponent
  ],
  imports: [
    CommonModule,SharedModule,TranslateModule
  ], 
  exports:[StepsComponent]
})
export class StepsModule { }
