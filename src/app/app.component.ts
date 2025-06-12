import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'wild-agency';
  @ViewChild('ourServices') ourServices!: ElementRef;
  @ViewChild('aboutUs') aboutUs!: ElementRef;
  @ViewChild('contactUs') contactUs!: ElementRef;
  sections: { [key: string]: ElementRef } = {};

  constructor(private translate: TranslateService, private scrollService: ScrollService) { }

  ngOnInit() {
    const userLang = navigator.language.startsWith('bg') ? 'bg' : 'en';
    this.translate.setDefaultLang(userLang);
    this.translate.use(userLang);
  }

  ngAfterViewInit() {
    this.sections = {
      'our-services': this.ourServices,
      'about-us': this.aboutUs,
      'contact-us': this.contactUs,
    };
    this.scrollService.scrollObs$.subscribe((sectionId: string) => {
      let section = this.sections[sectionId];
      if (section) {
        section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    })
  }
}
