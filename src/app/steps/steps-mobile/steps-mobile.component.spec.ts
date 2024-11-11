import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsMobileComponent } from './steps-mobile.component';

describe('StepsMobileComponent', () => {
  let component: StepsMobileComponent;
  let fixture: ComponentFixture<StepsMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsMobileComponent]
    });
    fixture = TestBed.createComponent(StepsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
