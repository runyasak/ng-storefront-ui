import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconStarComponent } from './sf-icon-star.component';

describe('SfIconStarComponent', () => {
  let component: SfIconStarComponent;
  let fixture: ComponentFixture<SfIconStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconStarComponent],
    });
    fixture = TestBed.createComponent(SfIconStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
