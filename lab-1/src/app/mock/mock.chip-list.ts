import { ChipColor } from '../enums/chip.enum';
import { IChipList } from '../models/chip.model';

export const chipList: IChipList[] = [
  {
    label: 'Angular',
    color: ChipColor.PRIMARY,
    selected: false,
  },
  {
    label: '16',
    color: ChipColor.ACCENT,
    selected: false,
  },
  {
    label: 'Awesome',
    color: ChipColor.WARN,
    selected: true,
  },
  {
    label: 'Framework',
    color: ChipColor.PRIMARY,
    selected: false,
  },
];
