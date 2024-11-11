import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBannerComponent } from './action-banner/action-banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { BannerQuoteComponent } from './banner-quote/banner-quote.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ActionBannerComponent, ContactUsComponent, BannerQuoteComponent],
  imports: [
    CommonModule,
    FormsModule,TranslateModule
  ],
  exports: [ActionBannerComponent, ContactUsComponent, BannerQuoteComponent]
})
export class SharedModule { }
