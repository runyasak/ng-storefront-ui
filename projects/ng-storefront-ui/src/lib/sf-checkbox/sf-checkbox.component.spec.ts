import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfCheckboxComponent } from './sf-checkbox.component';

describe('SfCheckboxComponent', () => {
  let component: SfCheckboxComponent;
  let fixture: ComponentFixture<SfCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfCheckboxComponent],
    });
    fixture = TestBed.createComponent(SfCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
