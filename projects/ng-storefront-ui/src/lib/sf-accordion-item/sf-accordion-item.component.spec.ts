import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfAccordionItemComponent } from './sf-accordion-item.component';

describe('SfAccordionItemComponent', () => {
  let component: SfAccordionItemComponent;
  let fixture: ComponentFixture<SfAccordionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfAccordionItemComponent],
    });
    fixture = TestBed.createComponent(SfAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
