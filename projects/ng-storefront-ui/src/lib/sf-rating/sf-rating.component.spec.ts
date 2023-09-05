import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfRatingComponent } from './sf-rating.component';

describe('SfRatingComponent', () => {
  let component: SfRatingComponent;
  let fixture: ComponentFixture<SfRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfRatingComponent],
    });
    fixture = TestBed.createComponent(SfRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
