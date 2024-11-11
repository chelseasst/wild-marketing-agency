import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner-quote',
  templateUrl: './banner-quote.component.html',
  styleUrls: ['./banner-quote.component.css']
})
export class BannerQuoteComponent implements AfterViewInit, OnDestroy {
  @Output() navigateToSection2 = new EventEmitter<string>();

  quotes: string[] = [];
  currentQuote: string = '';
  private interval: any;
  private quoteIndex = 0;

  constructor(private translate: TranslateService) { }
  
  ngAfterViewInit(): void {
    this.translate.get('quoteBanner.quotes').subscribe((quotes: any) => {
      this.quotes = Object.values(quotes);
      this.currentQuote = this.quotes[0];
      this.startQuotesCycle();
    });
  }
  startQuotesCycle() {
    this.interval = setInterval(() => {
      this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
      this.currentQuote = this.quotes[this.quoteIndex]
    }, 2000)
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  scrollTo(sectionId: string) {
    this.navigateToSection2.emit(sectionId);
  }
}
