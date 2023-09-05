import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconAddComponent } from './sf-icon-add.component';

describe('SfIconAddComponent', () => {
  let component: SfIconAddComponent;
  let fixture: ComponentFixture<SfIconAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconAddComponent],
    });
    fixture = TestBed.createComponent(SfIconAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
