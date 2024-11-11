import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements AfterViewInit {
  @ViewChildren('article') articles!: QueryList<ElementRef>;
  @ViewChild('articleContainer') articleContainer!: ElementRef;
  @ViewChild('whyUsHeading') whyUsHeading!: ElementRef;
  items = [
    { title: 'whyUs.carousel.item1.title', description: 'whyUs.carousel.item1.description' },
    { title: 'whyUs.carousel.item2.title', description: 'whyUs.carousel.item2.description' },
    { title: 'whyUs.carousel.item3.title', description: 'whyUs.carousel.item3.description' },
    { title: 'whyUs.carousel.item4.title', description: 'whyUs.carousel.item4.description' },
    { title: 'whyUs.carousel.item5.title', description: 'whyUs.carousel.item5.description' }
  ];
  currentIndex = 0;

  constructor(private cdr: ChangeDetectorRef, private translateService: TranslateService) { }
  ngAfterViewInit(): void {
    this.observeArctiles();
    this.observeText();
  }
  observeArctiles(): void {
    const options = {
      root: this.articleContainer.nativeElement,
      threshold: 0.05
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          let index = this.articles.toArray().findIndex(article => article.nativeElement === entry.target);
          this.currentIndex = index;
        }
      }, options);
    })
    let articlesArray = this.articles.toArray();
    articlesArray.forEach(article => {
      observer.observe(article.nativeElement)
    });
  }
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
  observeText() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.whyUsHeading.nativeElement.classList.add('pop')
          this.articleContainer.nativeElement.classList.add('carousel-container-animate');
          observer.unobserve(entry.target);
        }
      },
      )
    }, {
      threshold: 0.6
    })
    observer.observe(this.whyUsHeading.nativeElement)
  }
}
