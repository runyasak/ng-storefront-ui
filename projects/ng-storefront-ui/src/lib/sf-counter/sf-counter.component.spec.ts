import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfCounterComponent } from './sf-counter.component';

describe('SfCounterComponent', () => {
  let component: SfCounterComponent;
  let fixture: ComponentFixture<SfCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfCounterComponent],
    });
    fixture = TestBed.createComponent(SfCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
