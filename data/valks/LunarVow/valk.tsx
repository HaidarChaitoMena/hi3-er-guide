import { Valkery } from '@/types/Valkery';
import build1 from './build1';
import build2 from './build2';

const LunarVow: Valkery = {
  label: 'Lunar Vow (LV)',
  image: 'Lunar Vow',
  build: [build1, build2],
  type: 3,
  tier: 5,
  minRank: 3,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 15, selected: '✓' },
    { title: 15, selected: '✓' },
  ],
};
export default LunarVow;
