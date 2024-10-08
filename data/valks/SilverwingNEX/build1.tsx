import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Silverwing_NEX_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Bodhi_Su } from '@/data/signets/extra/extra';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/extra/extra';
import { Signets_of_Discipline_Aponia } from '@/data/signets/extra/extra';
import { Signets_of_Gold_Eden } from '@/data/signets/extra/extra';
import { Signets_of_Stars_Griseo } from '@/data/signets/extra/extra';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/priority';
import { buildType } from '@/types/Build';

const build1: buildType = {
  label: 'General Build',
  tier: 4.5,
  gear: [
    {
      gearInfo: 'Falcon Flare PRI | Bronya N-EX TMB',
      is_budget_visible: false,
    },
    {
      gearInfo: 'Falcon Flare PRI | Bronya N-EX TB Zaychik M',
      is_budget_visible: false,
    },
  ],
  extra_notes: [
    {
      text: 'SEQUENCE: Use Support and trigger QTE, deploy Scatter Barrier and spam ATK; once you have Grey Falcon, Hold ATK and spam Shotgun Combo. Use Ult when available.',
    },
  ],

  notes:
    'Note for 7.1 P2: Despite not having in-built ignite or bleeding, SU2 will offer these debuffs randomly through attacking. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Silverwing_NEX_Ego.Blessing_of_Phantom_Plumes, 'Start'),
      withPriority(Silverwing_NEX_Ego.Blessing_of_Grey_Falcon, 'Mandatory'),
      withPriority(Silverwing_NEX_Ego.Blessing_of_Pale_Feathers, 'Mandatory'),
      withPriority(Silverwing_NEX_Ego.Blessing_of_Silver_Eagle, 'Optional'),
    ],

    [
      Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
      Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
      Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
      Signets_of_Bodhi_Su.Motto_of_IddhiVidha,
      withPriority(Signets_of_Bodhi_Su.Motto_of_CetoPariyaNana, 'Optional'),
      withPriority(Signets_of_Bodhi_Su.Motto_of_Bodhi, 'CORE'),
      Signets_of_Bodhi_Su.Maxim_of_Anitya,
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Anatman, 'Optional'),
      withPriority(Signets_of_Bodhi_Su.Maxim_of_Santam, 'Optional'),
    ],

    [
      Signets_of_Discipline_Aponia.Sixth_No_Decadence,
      Signets_of_Discipline_Aponia.First_No_Betrayal,
      Signets_of_Discipline_Aponia.Fifth_No_Falsehood,
      withPriority(Signets_of_Discipline_Aponia.You_Shall_Receive_Disciplines_Blessing, 'CORE'),
      Signets_of_Discipline_Aponia.You_Shall_Answer_Prayers,
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      withPriority(Signets_of_Gold_Eden.Echo_of_Gold, 'CORE'),
      withPriority(Signets_of_Gold_Eden.Echo_of_Withered_Soil, 'Optional'),
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

    [Signets_of_Stars_Griseo.Red__Hot, Signets_of_Stars_Griseo.Yellow__Warm],
  ],
  supports: [
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    [
      AvatarImages.Azure_Empyrea_Avatar,
      AvatarImages.Blood_Rose_Avatar,
      AvatarImages.Bright_Knight_Excelsis_Avatar,
    ],
    [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Empty_Like_Shala],
    [EmblemsImages.Veil_of_Tears, EmblemsImages.Because_of_You, EmblemsImages.Dreamful_Gold],
    [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
  ],
};

export default build1;
