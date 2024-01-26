import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingCardComponent } from './two-way-binding-card.component';

describe('TwoWayBindingCardComponent', () => {
  let component: TwoWayBindingCardComponent;
  let fixture: ComponentFixture<TwoWayBindingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayBindingCardComponent]
    });
    fixture = TestBed.createComponent(TwoWayBindingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
