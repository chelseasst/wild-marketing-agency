import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;
  @ViewChildren('animationSquare') animationSquare!: QueryList<ElementRef>;
  @ViewChild('heading2') heading2!: ElementRef;

  ngAfterViewInit() {
    this.observeAnimatedText();
  }
  observeAnimatedText() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.heading2.nativeElement) {
            entry.target.classList.add('drop-down-h2');
          } else {
            entry.target.classList.add('slide-up');
          }
          observer.unobserve(entry.target);
        }
      })
    })
    let elements = [this.heading2, ...this.animatedElements]
    elements.forEach(el => {
      observer.observe(el.nativeElement)
    })
  }
}

