import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconBaseComponent } from './sf-icon-base.component';

describe('SfIconBaseComponent', () => {
  let component: SfIconBaseComponent;
  let fixture: ComponentFixture<SfIconBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconBaseComponent],
    });
    fixture = TestBed.createComponent(SfIconBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
