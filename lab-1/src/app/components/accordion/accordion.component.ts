import { Component } from '@angular/core';
import { IAccordionPannel } from 'src/app/models/accordion.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  accordionContent: IAccordionPannel[] = [
    {
      title: 'First Accordion',
      description: 'This is the description for first accordion',
      content: 'This is the content for first accordion',
    },
    {
      title: 'Second Accordion',
      description: 'This is the description for second accordion',
      content: 'This is the content for second accordion',
    },
  ];
  panelOpenState = false;
}
