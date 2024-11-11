import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsComponent } from './facts/facts.component';
import { IncrementCountDirective } from '../helpers/increment-count.directive';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    FactsComponent,IncrementCountDirective
  ],
  imports: [
    CommonModule,TranslateModule
  ],
  exports:[FactsComponent]
})
export class FactsModule { }
