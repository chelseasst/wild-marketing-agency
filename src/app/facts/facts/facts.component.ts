import { AfterViewChecked, AfterViewInit, Component, Directive, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IncrementCountDirective } from 'src/app/helpers/increment-count.directive';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements AfterViewInit {
  @ViewChildren('letter') letters!: QueryList<ElementRef>;
  @ViewChild('motoItalic') articlesWrapper!: ElementRef;
  @ViewChildren('heading') heading!: QueryList<ElementRef>;
  @ViewChildren(IncrementCountDirective) factDirectives!: QueryList<IncrementCountDirective>

  ngAfterViewInit() {
    this.observeAnimatedElements();
    this.observeFactNumbers();
  }

  animateFallingLetters() {
    this.letters.forEach((letter, index) => {
      const letterElement = letter.nativeElement as HTMLElement;
      letterElement.style.setProperty('--delay', `${index * 0.1}s`);
      letterElement.classList.add('falling');
    });
  }
  observeAnimatedElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateFallingLetters();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 1
    }
    );
    observer.observe(this.articlesWrapper.nativeElement);
  }
  observeFactNumbers() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elDirective = this.factDirectives.find(d => d.element === entry.target)
          elDirective?.animateCount();
          observer.unobserve(entry.target);
        }
      })
    })
    let arrayOfFacts = this.factDirectives.toArray();
    arrayOfFacts.forEach(directive => {
      observer.observe(directive.element);
    })
  }
}
