import { buildType } from '@/types/Build';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { Signets_of_Vicissitude_Hua } from '@/data/signets/extra/extra';
import { withPriority } from '@/helpers/priority';
import { FenghuangofVicissitude_Ego } from '@/data/signets/tsx/EgoAdditions';
import { AvatarImages } from '@/data/supports/AvatarImages.g';

const build1: buildType = {
  label: 'ORA ORA ORA ORA but kicks',
  tier: 5,
  gear: [],
  notes:
    'Basic ATK Build for FoV, this build is straightforward. Kicks have highest dps between punch and kicks. This build starts off really weak and becomes much stronger later on. (Yes, you are not allucinating, they use the same build)',
  extra_notes: [
    {
      text: 'SEQUENCE: Floor Start > Swap to Kick > Spam A into Kick Flurry Sequence. Ult when necessary, then repeat.',
    },
  ],
  signets: [
    [
      withPriority(FenghuangofVicissitude_Ego.Blessing_of_Arcane_Traces, 'Start'),
      withPriority(FenghuangofVicissitude_Ego.Blessing_of_Attainment, 'Start'),
      withPriority(FenghuangofVicissitude_Ego.Blessing_of_Observation, '2nd Floor (Optional)'),
    ],
    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      withPriority(Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation, 'CORE'),
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
    ],

    [
      Signets_of_Vicissitude_Hua.Long_Trip,
      Signets_of_Vicissitude_Hua.Dark_Garb_No_More,
      Signets_of_Vicissitude_Hua.Old_Dreams_Again,
      withPriority(Signets_of_Vicissitude_Hua.Suffering_Mass, 'CORE'),
      withPriority(Signets_of_Vicissitude_Hua.Broken_Dream, 'Optional'),
    ],
    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],
    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Discipline_Aponia.First_No_Betrayal,
    ],
  ],

  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Tin_Flask, EmblemsImages.An_Old_Pals_Legacy],
  ],
};

export default build1;
