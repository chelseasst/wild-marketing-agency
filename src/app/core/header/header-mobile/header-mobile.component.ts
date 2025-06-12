import { Component } from "@angular/core";
import { LanguageService } from "src/app/language.service";
import { ScrollService } from "src/app/scroll.service";

@Component({
    selector: 'app-header-mobile',
    templateUrl: 'header-mobile.component.html',
    styleUrls: ['header-mobile.component.css']
})
export class HeaderMobileComponent {
    isNavOpen = false;
    constructor(private languageService: LanguageService, private scrollService: ScrollService) { }
    scrollTo(sectionId: string) {
        this.toggleNav();
        this.scrollService.scrollTo(sectionId);
    }
    toggleNav(ev?: MouseEvent) {
        ev?.preventDefault()
        this.isNavOpen = !this.isNavOpen;
    }
    changeLanguage(language: string) {
        this.languageService.setLanguage(language);
    }
}