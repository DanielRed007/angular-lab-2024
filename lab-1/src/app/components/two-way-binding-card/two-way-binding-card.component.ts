import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-card',
  templateUrl: './two-way-binding-card.component.html',
  styleUrls: ['./two-way-binding-card.component.scss'],
})
export class TwoWayBindingCardComponent {
  @Input({ required: true }) cardTitle!: string;
  @Input({ required: true }) tooltipMessage!: string;
  public userInput: string = '';
}
