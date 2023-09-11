import { EmblemsImages } from '@/data/emblems/EmblemsImages.g';
import { AvatarImages } from '@/data/supports/AvatarImages.g';
import { Build } from '@/types/Build';

const build1: Build = {
    label: 'Weapon Spam Build',
    tier: 3.3,
    isNew: true,
    notes: 'Swap BR for BK by F9/F10 Shop to deal with Heimdall.',
    signets: [],
    supports: [
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar, AvatarImages.Bright_Knight_Excelsis_Avatar],
        [AvatarImages.Azure_Empyrea_Avatar, AvatarImages.Blood_Rose_Avatar],
    ],
    emblems: [
        [EmblemsImages.Pseudo_Miracle, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Forget_Me_Not, EmblemsImages.Falling_in_Past_Light],
        [EmblemsImages.Tin_Flask, EmblemsImages.Falling_in_Past_Light],
    ]
};

export default build1;