import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconStarHalfComponent } from './sf-icon-star-half.component';

describe('SfIconStarHalfComponent', () => {
  let component: SfIconStarHalfComponent;
  let fixture: ComponentFixture<SfIconStarHalfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconStarHalfComponent]
    });
    fixture = TestBed.createComponent(SfIconStarHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
