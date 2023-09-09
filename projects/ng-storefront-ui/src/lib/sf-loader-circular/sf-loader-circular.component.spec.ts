import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfLoaderCircularComponent } from './sf-loader-circular.component';

describe('SfLoaderCircularComponent', () => {
  let component: SfLoaderCircularComponent;
  let fixture: ComponentFixture<SfLoaderCircularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SfLoaderCircularComponent],
    });
    fixture = TestBed.createComponent(SfLoaderCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
