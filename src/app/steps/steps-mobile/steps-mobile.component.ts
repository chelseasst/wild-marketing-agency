import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
@Component({
  selector: 'app-steps-mobile',
  templateUrl: './steps-mobile.component.html',
  styleUrls: ['./steps-mobile.component.css']
})
export class StepsMobileComponent {
  isBulgarian: boolean = false;
  constructor(
    private languageService: LanguageService) { }
  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.isBulgarian = lang === 'bg';
    })
  }
}
