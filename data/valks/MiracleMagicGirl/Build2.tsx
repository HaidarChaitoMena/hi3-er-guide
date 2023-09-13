import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Signets_of_Stars_Griseo } from '@/data/signets/tsx/Signets_of_Stars_Griseo';
import { Signets_of_Reverie_Pardofelis } from '@/data/signets/tsx/Signets_of_Reverie_Pardofelis';
import { Signets_of_Helix_VillV } from '@/data/signets/tsx/Signets_of_Helix_VillV';
import { Signets_of_Setsuna_Sakura } from '@/data/signets/tsx/Signets_of_Setsuna_Sakura';
import { Signets_of_Decimation_Kalpas } from '@/data/signets/tsx/Signets_of_Decimation_Kalpas';
import { Signets_of_Bodhi_Su } from '@/data/signets/tsx/Signets_of_Bodhi_Su';
import { MiracleMagicGirl } from '@/data/signets/tsx/EgoSignets';
import { Build } from '@/types/Build';
import { withPriority } from '@/helpers/functions';

const build2: Build = {
    label: 'Charged Spam Build',
    tier: 5,
    isNew: true,
    notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall. This build focus on using charged attacks, through ego signet refreshesh via Ego signet, for massive damage',
    signets: [
        [
            withPriority(MiracleMagicGirl.Blessing_of_Resplendence,'Start'),
            withPriority(MiracleMagicGirl.Blessing_of_Inner_Blaze,'Start'),
            withPriority(MiracleMagicGirl.Blessing_of_Stellar_Breach,'Optional'),

        
        ],

        [
            Signets_of_Decimation_Kalpas.Blade_Grave_and_Scar,
            Signets_of_Decimation_Kalpas.Bone_Blood_and_Ribbon,
            Signets_of_Decimation_Kalpas.Path_Misfortune_and_Written_Fate,
            Signets_of_Decimation_Kalpas.Desireless_Mindless_and_Homeless,
            Signets_of_Decimation_Kalpas.Soldiers_Scissors_Spoils_and_Slaughter,
          ],

          [
            Signets_of_Bodhi_Su.Motto_of_DibbaCakkhu,
            Signets_of_Bodhi_Su.Motto_of_PubbeNivasanussati,
            Signets_of_Bodhi_Su.Motto_of_Asavakkhaya,
            Signets_of_Bodhi_Su.Motto_of_Bodhi,
            Signets_of_Bodhi_Su.Maxim_of_Anitya,
          ],

          [
            Signets_of_Helix_VillV.Act_II_Pendulum,
            Signets_of_Helix_VillV.Act_III_Conflict,
            Signets_of_Helix_VillV.Act_IV_Spoon,
            Signets_of_Helix_VillV.Intermezzo_Holistic_HelixCore,
            Signets_of_Helix_VillV.Drama_Origin_of_Slumber,
          ],
          [
            Signets_of_Stars_Griseo.Red__Hot,
            Signets_of_Stars_Griseo.Yellow__Warm,
            Signets_of_Stars_Griseo.Black__Dark,
            Signets_of_Stars_Griseo.Shining_Like_StarsCore
        ],

        [  
            Signets_of_Reverie_Pardofelis.Motto_of_Meow,
            Signets_of_Reverie_Pardofelis.BackCurled_Tail,
            Signets_of_Reverie_Pardofelis.Neighborhood_Chatters,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Fuji,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Koyo,
            Signets_of_Setsuna_Sakura.Bountiful_Blossom_Botan,
        ],
      



    ],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Mad_Kings_Mask, EmblemsImages.An_Old_Pals_Legacy],
        [EmblemsImages.Light_as_a_Bodhi_Leaf, EmblemsImages.Dreamful_Gold],
        [EmblemsImages.Tin_Flask, EmblemsImages.Dreamful_Gold],
    ]
};

export default build2;