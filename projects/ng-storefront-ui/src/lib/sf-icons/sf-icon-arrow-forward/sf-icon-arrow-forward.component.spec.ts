import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconArrowForwardComponent } from './sf-icon-arrow-forward.component';

describe('SfIconArrowForwardComponent', () => {
  let component: SfIconArrowForwardComponent;
  let fixture: ComponentFixture<SfIconArrowForwardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconArrowForwardComponent]
    });
    fixture = TestBed.createComponent(SfIconArrowForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
