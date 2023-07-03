import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconChevronRightComponent } from './sf-icon-chevron-right.component';

describe('SfIconChevronRightComponent', () => {
  let component: SfIconChevronRightComponent;
  let fixture: ComponentFixture<SfIconChevronRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconChevronRightComponent],
    });
    fixture = TestBed.createComponent(SfIconChevronRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
