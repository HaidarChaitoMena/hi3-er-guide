import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Bodhi_Su, Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/extra/extra';
import { Herrscher_of_Rebirth_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Vicissitude_Hua } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { buildType } from '@/types/Build';
import { Signets_of_Infinity_Mobius } from '@/data/signets/extra/extra';
import { withPriority } from '@/helpers/priority';

const build1: buildType = {
  label: 'Soothingness Build',
  tier: 5,

  gear: [
    {
      gearInfo: 'Life Harvester: Shared Destiny | Seele: Herrscher of Rebirth TMB',
      is_budget_visible: false,
    },
    {
      gearInfo:
        'Life Harvester: Shared Destiny / Highest ATK Scythe Statstick | Sirin Ascendant TMB',
      is_budget_visible: true,
    },
    {
      gearInfo:
        'Life Harvester: Shared Destiny / Highest ATK Scythe Statstick | Shattered Swords TMB',
      is_budget_visible: true,
    },
    {
      gearInfo:
        'Life Harvester: Shared Destiny / Highest ATK Scythe Statstick | Elysia TB Dante M / Other Variants',
      is_budget_visible: true,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Dodge>ULT>Swap to lifebinder form> WAx2 > COMBOx2 > Repeat; ult as necessary',
    },
  ],
  notes:
    'Loadout bonus info the (x) number is the specific build loadout; You can swap BR for BK by F9/F10 Shop to have an easier time dealing with Heimdall. Life binder (DPS - Short haired) build for the Herrscher of Rebirth, focusses on dealing high damage through chaining weapon active and joint combos. ',
  signets: [
    [
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Soothingness, 'Start'),
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Decay, 'Optional'),
      withPriority(Herrscher_of_Rebirth_Ego.Blessing_of_Shared_Destiny, 'Optional'),
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
      Signets_of_Infinity_Mobius.Lip_Poison_E,
      Signets_of_Infinity_Mobius.Entwined_P,
      Signets_of_Infinity_Mobius.Rodent_V,
      withPriority(Signets_of_Infinity_Mobius.Infinite_X, 'CORE'),
      Signets_of_Infinity_Mobius.Dead_X,
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anatman,
      Signets_of_Bodhi_Su.Maxim_of_Santam,
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
    ],
  ],
  supports: [
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Starlit_Astrologos_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
    [EmblemsImages.Forbidden_Seed, EmblemsImages.Boundless_Logos],
    [EmblemsImages.Tin_Flask, EmblemsImages.Boundless_Logos],
  ],
};

export default build1;
