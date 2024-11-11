import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsDesktopComponent } from './steps-desktop.component';

describe('StepsDesktopComponent', () => {
  let component: StepsDesktopComponent;
  let fixture: ComponentFixture<StepsDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsDesktopComponent]
    });
    fixture = TestBed.createComponent(StepsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
