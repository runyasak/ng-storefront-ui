import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconShoppingCartComponent } from './sf-icon-shopping-cart.component';

describe('SfIconShoppingCartComponent', () => {
  let component: SfIconShoppingCartComponent;
  let fixture: ComponentFixture<SfIconShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconShoppingCartComponent],
    });
    fixture = TestBed.createComponent(SfIconShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
