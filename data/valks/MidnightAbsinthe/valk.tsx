import { Valkery } from '@/types/Valkery';
import build1 from './build1';

const MidnightAbsinthe: Valkery = {
  label: 'Midnight Absinthe (Raven)',
  image: 'Midnight Absinthe',
  build: [build1],
  type: 4,
  tier: 2,
  minRank: 5,
  loadoutBuffs: [
    { title: 0, selected: ' ' },
    { title: 5, selected: '✓' },
    { title: 5, selected: ' ' },
    { title: 10, selected: ' ' },
    { title: 10, selected: '✓' },
    { title: 15, selected: ' ' },
    { title: 15, selected: '✓' },
  ],
};
export default MidnightAbsinthe;
