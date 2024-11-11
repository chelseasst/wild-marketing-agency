import { Component, EventEmitter, Output } from "@angular/core";
import { LanguageService } from "src/app/language.service";

@Component({
  selector: 'app-header-desktop',
  templateUrl: 'header-desktop.component.html',
  styleUrls: ['header-desktop.component.css']
})
export class HeaderDektopComponent {
  @Output() navigateToSection = new EventEmitter<string>();
  constructor(private languageService: LanguageService) { }
  scrollTo(sectionId: string) {
    this.navigateToSection.emit(sectionId);
  }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}