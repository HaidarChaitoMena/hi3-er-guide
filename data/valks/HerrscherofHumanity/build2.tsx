import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Herrscher_of_Human_Ego_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/extra/extra';
import { Signets_of_Helix_VillV } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/priority';
import { buildType } from '@/types/Build';

const build2: buildType = {
  label: 'Ballista Build',
  tier: 4.5,

  gear: [
    {
      gearInfo: 'Domain of Ego | Elysia Pristine TMB',
      is_budget_visible: false,
    },
    {
      gearInfo: 'Any Highest ATK Bow Statstick | Willows TMB',
      is_budget_visible: true,
    },
    {
      gearInfo: 'Any Highest ATK Bow Statstick | Ana Schariac TMB',
      is_budget_visible: true,
    },
    {
      gearInfo: 'Any Highest ATK Bow Statstick | Jin Shengtan TM Ely Pristine/Other B Pieces',
      is_budget_visible: true,
    },
    {
      gearInfo: 'Any Highest ATK Bow Statstick | Scott TM Rasputin B',
      is_budget_visible: true,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Dodge > Charged > When stack 3/3 > WA > repeat (Dodge when the Ultimate Evasion is up); Keep VVs active support if you struggle with damage',
    },
  ],
  signets: [
    [
      withPriority(Herrscher_of_Human_Ego_Ego.Blessing_of_First_Encounter, 'Start'),
      withPriority(Herrscher_of_Human_Ego_Ego.Blessing_of_First_Yearning, 'Start'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Brand_of_the_Undead,
      Signets_of_Deliverance_Kevin.Artifact_of_the_Inhibitor,
      withPriority(Signets_of_Deliverance_Kevin.Shadow_of_the_Deliverer, 'CORE'),
      Signets_of_Deliverance_Kevin.Dream_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Triumph_of_the_Deliverer, 'Optional'),
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
      Signets_of_Helix_VillV.Act_V_Spider_Web,
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_IV_Spoon,
      withPriority(Signets_of_Helix_VillV.Intermezzo_Holistic_Helix, 'CORE'),
      Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      withPriority(Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_Joy, 'CORE'),
    ],

    [
      withPriority(Signets_of_Stars_Griseo.Red__Hot, 'Must Get'),
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
    ],
  ],
  notes:
    'Once you start getting Kalpas signets, use Blood Rose Spam to lower your HP all the way down to <100 in order to start fully utilizing his DMG buffs.',
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Burden, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ],
};

export default build2;
