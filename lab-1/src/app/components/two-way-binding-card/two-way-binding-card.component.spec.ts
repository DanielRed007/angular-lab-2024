import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { TwoWayBindingCardComponent } from './two-way-binding-card.component';
import { By } from '@angular/platform-browser';

describe('TwoWayBindingCardComponent', () => {
  let component: TwoWayBindingCardComponent;
  let fixture: ComponentFixture<TwoWayBindingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayBindingCardComponent],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatInputModule,
        FormsModule,
      ],
    });
    fixture = TestBed.createComponent(TwoWayBindingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should should render a Card Title', () => {
    component.cardTitle = 'Two-Way Binding Card';

    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.card-title').textContent).toContain(
      'Two-Way Binding Card'
    );
  });

  it('should should render valid typed test input', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));

    inputElement.nativeElement.value = 'This is a test input';
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.userInput).toBe('This is a test input');
  });
});
