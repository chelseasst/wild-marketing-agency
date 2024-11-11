import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en'); // Default language is English
  language$ = this.languageSubject.asObservable();
  constructor(private translate: TranslateService) { }

  setLanguage(language: string) {
    this.languageSubject.next(language);
    this.translate.use(language);
  }

  getLanguage(): string {
    return this.languageSubject.getValue();
  }
}
