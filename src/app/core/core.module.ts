import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HeaderDektopComponent } from "./header/header-desktop/header-desktop.component";
import { HeaderMobileComponent } from "./header/header-mobile/header-mobile.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [HeaderComponent, HeaderDektopComponent, HeaderMobileComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, HeaderDektopComponent, HeaderMobileComponent]
})
export class CoreModule { }
