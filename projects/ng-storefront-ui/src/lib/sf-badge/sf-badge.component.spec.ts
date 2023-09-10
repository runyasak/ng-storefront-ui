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

  it('should render content when pass with `10`', () => {
    fixture.componentRef.setInput('content', 10);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toMatch(/10/);
  });

  it('should render content with `99+` when pass content with number that exceed the max', () => {
    fixture.componentRef.setInput('content', 999);
    fixture.componentRef.setInput('max', 99);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toMatch(/99+/);
  });

  it('should render `Hello World` when pass content with text', () => {
    fixture.componentRef.setInput('content', 'Hello World');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toMatch(/Hello World/);
  });
});
