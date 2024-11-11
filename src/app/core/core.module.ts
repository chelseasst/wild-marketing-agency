import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HeaderDektopComponent } from "./header/header-desktop/header-desktop.component";
import { HeaderMobileComponent } from "./header/header-mobile/header-mobile.component";
import { CommonModule } from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [HeaderComponent, HeaderDektopComponent, HeaderMobileComponent, FooterComponent],
    imports: [CommonModule, TranslateModule],
    exports: [HeaderComponent, HeaderDektopComponent, HeaderMobileComponent, FooterComponent]
})
export class CoreModule { }
