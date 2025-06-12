import { Component } from "@angular/core";
import { LanguageService } from "src/app/language.service";
import { ScrollService } from "src/app/scroll.service";

@Component({
  selector: 'app-header-desktop',
  templateUrl: 'header-desktop.component.html',
  styleUrls: ['header-desktop.component.css']
})
export class HeaderDektopComponent {
  constructor(private languageService: LanguageService, private scrollService: ScrollService) { }
  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}