import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const HerrscherofReason: valkeryType = {
  label: 'Herrscher of Reason (HoR)',
  image: 'Herrscher of Reason',
  build: [build1],
  type: 2,
  tier: 4,
  min_rank: 3,
  loadout_buffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default HerrscherofReason;
