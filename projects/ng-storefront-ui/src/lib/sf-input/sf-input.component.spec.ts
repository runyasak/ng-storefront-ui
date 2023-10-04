import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfInputComponent } from './sf-input.component';

describe('SfInputComponent', () => {
  let component: SfInputComponent;
  let fixture: ComponentFixture<SfInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfInputComponent],
    });
    fixture = TestBed.createComponent(SfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render `Hello World` on placeholder', () => {
    fixture.componentRef.setInput('placeholder', 'Hello World');
    fixture.detectChanges();

    const inputField = fixture.debugElement.nativeElement.querySelector(
      `[data-testid='input-field']`
    );

    expect(inputField.placeholder).toMatch(/Hello World/);
  });
});
