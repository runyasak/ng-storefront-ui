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

  it('should render 3 filled stars when pass with value as 3', () => {
    fixture.componentRef.setInput('value', 3);
    fixture.detectChanges();

    const filledStars = fixture.debugElement.nativeElement.querySelectorAll(
      `[data-testid='star-filled']`
    );

    expect(filledStars.length).toEqual(3);
  });

  it('should render 4 filled stars when pass with value as 3.5`', () => {
    fixture.componentRef.setInput('value', 3.5);
    fixture.detectChanges();

    const filledStars = fixture.debugElement.nativeElement.querySelectorAll(
      `[data-testid='rating-star-filled']`
    );

    expect(filledStars.length).toEqual(4);
  });

  it('should render 3 filled stars with a half when pass with value as 3.5 and `halfIncrement`', () => {
    fixture.componentRef.setInput('value', 3.5);
    fixture.componentRef.setInput('halfIncrement', true);
    fixture.detectChanges();

    const filledStars = fixture.debugElement.nativeElement.querySelectorAll(
      `[data-testid='rating-star-filled']`
    );

    const halfStar =
      fixture.debugElement.nativeElement.querySelectorAll(`[data-testid='star-half']`);

    expect(filledStars.length).toEqual(3);
    expect(halfStar.length).toEqual(1);
  });
});
