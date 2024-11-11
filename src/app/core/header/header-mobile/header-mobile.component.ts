import { Component, EventEmitter, Output } from "@angular/core";
import { LanguageService } from "src/app/language.service";

@Component({
    selector: 'app-header-mobile',
    templateUrl: 'header-mobile.component.html',
    styleUrls: ['header-mobile.component.css']
})
export class HeaderMobileComponent {
    isNavOpen = false;
    @Output() navigateToSection = new EventEmitter<string>();
    constructor(private languageService: LanguageService) { }
    scrollTo(sectionId: string) {
        this.toggleNav();
        this.navigateToSection.emit(sectionId);
    }
    toggleNav(ev?: MouseEvent) {
        ev?.preventDefault()
        this.isNavOpen = !this.isNavOpen;
    }
    changeLanguage(language: string) {
        this.languageService.setLanguage(language);
    }
}