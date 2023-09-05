import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconStarFilledComponent } from './sf-icon-star-filled.component';

describe('SfIconStarFilledComponent', () => {
  let component: SfIconStarFilledComponent;
  let fixture: ComponentFixture<SfIconStarFilledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconStarFilledComponent],
    });
    fixture = TestBed.createComponent(SfIconStarFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
