import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatExpansionModule],
      declarations: [AccordionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct number of panels', () => {
    const panels = fixture.debugElement.nativeElement.querySelectorAll(
      'mat-expansion-panel'
    );
    expect(panels.length).toBe(component.accordionContent.length);
  });

  it('should set panelOpenState to true when panel is opened', () => {
    const panel = fixture.debugElement.nativeElement.querySelector(
      'mat-expansion-panel'
    );
    panel.dispatchEvent(new Event('opened'));
    fixture.detectChanges();

    expect(component.panelOpenState).toBe(true);
  });

  it('should set panelOpenState to false when panel is closed', () => {
    const panel = fixture.debugElement.nativeElement.querySelector(
      'mat-expansion-panel'
    );
    panel.dispatchEvent(new Event('closed'));
    fixture.detectChanges();

    expect(component.panelOpenState).toBe(false);
  });
});
