import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfIconDeleteComponent } from './sf-icon-delete.component';

describe('SfIconDeleteComponent', () => {
  let component: SfIconDeleteComponent;
  let fixture: ComponentFixture<SfIconDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfIconDeleteComponent],
    });
    fixture = TestBed.createComponent(SfIconDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
