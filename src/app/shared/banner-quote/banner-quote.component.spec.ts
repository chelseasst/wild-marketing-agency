import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerQuoteComponent } from './banner-quote.component';

describe('BannerQuoteComponent', () => {
  let component: BannerQuoteComponent;
  let fixture: ComponentFixture<BannerQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerQuoteComponent]
    });
    fixture = TestBed.createComponent(BannerQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
