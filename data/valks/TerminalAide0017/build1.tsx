import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { Terminal_Aide_0017_Ego } from '@/data/signets/tsx/EgoSignets';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Deliverance_Kevin } from '@/data/signets/tsx/Signets_of_Deliverance_Kevin';
import { Signets_of_Gold_Eden } from '@/data/signets/tsx/Signets_of_Gold_Eden';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { withPriority } from '@/helpers/functions';
import { Build } from '@/types/Build';

const build1: Build = {
  label: 'General Build',
  tier: 4.3,
  isNew: true,
  notes: 'Starter Signet changes based on whether Helix is +2 or not. If yes = Vill-V start. If not = Deliverance Start. Kalpas is also skippable by choice, shifting the focus to Kevin, Vill-V, Pardo and going with Eden2 instead. Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
  signets: [
    [
      withPriority(Terminal_Aide_0017_Ego.Blessing_of_Guilding, 'Start'),
      withPriority(Terminal_Aide_0017_Ego.Blessing_of_Recursion, 'F2 Ego'),
      withPriority(Terminal_Aide_0017_Ego.Blessing_of_Stimulus, 'Optional 1st'),
    ],

    [
      Signets_of_Deliverance_Kevin.Goblet_of_the_Giver,
      Signets_of_Deliverance_Kevin.Pendant_of_the_Watcher,
      Signets_of_Deliverance_Kevin.Rochet_of_the_Pilgrim,
      Signets_of_Deliverance_Kevin.Mask_of_the_Predator,
      Signets_of_Deliverance_Kevin.Blade_of_the_Deliverer,
      Signets_of_Deliverance_Kevin.Crusade_of_the_Deliverer,
      withPriority(Signets_of_Deliverance_Kevin.Flock_of_the_Deliverer, 'Optional'),
    ],

    [
      Signets_of_Helix_VillV.Act_II_Pendulum,
      Signets_of_Helix_VillV.Act_III_Conflict,
      Signets_of_Helix_VillV.Act_I_Magic,
      withPriority(Signets_of_Helix_VillV.Act_IV_Spoon, 'Optional'),
      Signets_of_Helix_VillV.Interlude_Reversed_SpiralCore,
      Signets_of_Helix_VillV.Act_VII_HalfClosed_Door,
      withPriority(Signets_of_Helix_VillV.Act_VIII_Adorned_Chamber, 'Dont get if already have Kevins Breach'),
    ],

    [
      Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
      Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
      Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
      Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
      Signets_of_Decimation_Kalpas.Fight_Struggle_and_Decimation,
      Signets_of_Decimation_Kalpas.Man_Mask_and_Contract,
      Signets_of_Decimation_Kalpas.Burden_Difficulty_and_Calamity,
    ],

    [
      Signets_of_Gold_Eden.Recitatif_of_Eden,
      Signets_of_Gold_Eden.Recitatif_of_Creeks,
      Signets_of_Gold_Eden.Recitatif_of_Fine_Jade,
      Signets_of_Gold_Eden.Echo_of_Gold,
      Signets_of_Gold_Eden.Echo_of_Withered_Soil,
    ],

    [
      Signets_of_Reverie_Pardofelis.Motto_of_Meow,
      Signets_of_Reverie_Pardofelis.BackCurled_Tail,
      Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
      Signets_of_Reverie_Pardofelis.Empty_Dreams_Self_Set_and_JoyCore,
    ],

    [
      Signets_of_Stars_Griseo.Red__Hot,
      Signets_of_Stars_Griseo.Yellow__Warm,
      Signets_of_Stars_Griseo.Black__Dark,
      Signets_of_Stars_Griseo.Faded_StarsCore,
    ],

    [
      Signets_of_Stars_Griseo.Blue__Cold,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
      Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
    ],
  ],
  supports: [
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
    [AvatarImages.Starlit_Astrologos_Avatar, AvatarImages.Blood_Rose_Avatar],
  ],
  emblems: [
    [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Mad_Kings_Mask, EmblemsImages.Burden, EmblemsImages.Falling_in_Past_Light],
    [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
  ]
};

export default build1;
