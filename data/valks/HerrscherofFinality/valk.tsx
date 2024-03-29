import { valkeryType } from '@/types/Valkery';
import build1 from './Build1';
import build2 from './Build2';
import build3 from './Build3';

const HerrscherofFinality: valkeryType = {
  label: 'Herrscher of Finality (HoFi)',
  image: 'Herrscher of Finality',
  build: [build1, build2, build3],
  type: 4,
  tier: 5,
  min_rank: 3,
  loadout_buffs: [
    { title: 0, selected: '✓' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default HerrscherofFinality;
