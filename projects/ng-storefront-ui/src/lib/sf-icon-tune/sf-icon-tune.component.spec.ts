import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconTuneComponent } from './sf-icon-tune.component';

describe('SfIconTuneComponent', () => {
  let component: SfIconTuneComponent;
  let fixture: ComponentFixture<SfIconTuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconTuneComponent],
    });
    fixture = TestBed.createComponent(SfIconTuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
