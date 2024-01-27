import { Component } from '@angular/core';
import { chipList } from 'src/app/mock/mock.chip-list';
import { IChipList } from 'src/app/models/chip.model';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent {
  public chipList: IChipList[] = chipList;
}
