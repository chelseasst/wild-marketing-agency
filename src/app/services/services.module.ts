import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './services/service/service.component';



@NgModule({
  declarations: [
    ServicesComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ServicesComponent]
})
export class ServicesModule { }
