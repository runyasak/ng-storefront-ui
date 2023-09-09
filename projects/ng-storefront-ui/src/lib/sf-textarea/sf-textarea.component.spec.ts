import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfTextareaComponent } from './sf-textarea.component';

describe('SfTextareaComponent', () => {
  let component: SfTextareaComponent;
  let fixture: ComponentFixture<SfTextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfTextareaComponent],
    });
    fixture = TestBed.createComponent(SfTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
