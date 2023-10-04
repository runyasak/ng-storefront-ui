import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfSelectComponent } from './sf-select.component';

describe('SfSelectComponent', () => {
  let component: SfSelectComponent;
  let fixture: ComponentFixture<SfSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfSelectComponent],
    });
    fixture = TestBed.createComponent(SfSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
