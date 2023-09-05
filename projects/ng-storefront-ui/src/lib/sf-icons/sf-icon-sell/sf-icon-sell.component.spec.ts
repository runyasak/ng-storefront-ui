import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconSellComponent } from './sf-icon-sell.component';

describe('SfIconSellComponent', () => {
  let component: SfIconSellComponent;
  let fixture: ComponentFixture<SfIconSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconSellComponent],
    });
    fixture = TestBed.createComponent(SfIconSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
