import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/language.service';


@Component({
  selector: 'app-steps-desktop',
  templateUrl: './steps-desktop.component.html',
  styleUrls: ['./steps-desktop.component.css']
})
export class StepsDesktopComponent implements OnInit, AfterViewInit {
  @ViewChild('steps') steps!: ElementRef;
  isBulgarian: boolean = false;

  constructor(
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.isBulgarian = lang === 'bg';
      console.log('Language bg - desktop')
    })
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('line-animation');
        }
      })
    });
    observer.observe(this.steps.nativeElement)
  }
}
