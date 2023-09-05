import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfLinkComponent } from './sf-link.component';

describe('SfLinkComponent', () => {
  let component: SfLinkComponent;
  let fixture: ComponentFixture<SfLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfLinkComponent],
    });
    fixture = TestBed.createComponent(SfLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
