import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconRemoveComponent } from './sf-icon-remove.component';

describe('SfIconRemoveComponent', () => {
  let component: SfIconRemoveComponent;
  let fixture: ComponentFixture<SfIconRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconRemoveComponent]
    });
    fixture = TestBed.createComponent(SfIconRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
