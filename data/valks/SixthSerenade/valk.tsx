import { valkeryType } from '@/types/Valkery';
import build1 from './build1';

const SixthSerenade: valkeryType = {
  label: 'Sixth Serenade (6S)',
  image: 'Sixth Serenade',
  build: [build1],
  type: 2,
  tier: 4,
  min_rank: 4,
  loadout_buffs: [
    { title: 0, selected: '' },
    { title: 5, selected: '✓' },
    { title: 5, selected: '' },
    { title: 10, selected: '✓' },
    { title: 10, selected: '' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '' },
  ],
};
export default SixthSerenade;
