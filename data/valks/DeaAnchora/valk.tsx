import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const DeaAnchora: valkeryType = {
  label: 'Dea Anchora (DA)',
  image: 'Dea Anchora',
  build: [build1],
  type: 4,
  tier: 2,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
  min_rank: 3,
};
export default DeaAnchora;
