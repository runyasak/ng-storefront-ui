import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfRadioComponent } from './sf-radio.component';

describe('SfRadioComponent', () => {
  let component: SfRadioComponent;
  let fixture: ComponentFixture<SfRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfRadioComponent],
    });
    fixture = TestBed.createComponent(SfRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
