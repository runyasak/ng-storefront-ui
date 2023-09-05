import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconChevronLeftComponent } from './sf-icon-chevron-left.component';

describe('SfIconChevronLeftComponent', () => {
  let component: SfIconChevronLeftComponent;
  let fixture: ComponentFixture<SfIconChevronLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconChevronLeftComponent],
    });
    fixture = TestBed.createComponent(SfIconChevronLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
