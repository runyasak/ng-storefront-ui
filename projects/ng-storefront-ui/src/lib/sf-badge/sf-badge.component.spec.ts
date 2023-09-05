import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfBadgeComponent } from './sf-badge.component';

describe('SfBadgeComponent', () => {
  let component: SfBadgeComponent;
  let fixture: ComponentFixture<SfBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfBadgeComponent],
    });
    fixture = TestBed.createComponent(SfBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
