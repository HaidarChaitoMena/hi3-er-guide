import { Signet } from '@/types/Signet';
interface Signets_of_Stars_Griseo_interface {
  Red__HotNormal: Signet;
  Blue__ColdNormal: Signet;
  Yellow__WarmNormal: Signet;
  Black__DarkNormal: Signet;
  White__BrightNormal: Signet;
  Grey__EmptyNormal: Signet;
  Shining_Like_StarsCore: Signet;
  Blooming_Like_FlowersEnhanced: Signet;
  Burning_Like_FlamesEnhanced: Signet;
  Stretching_Like_LeavesEnhanced: Signet;
  Faded_StarsCore: Signet;
  Petals_in_the_WindEnhanced: Signet;
  Fallen_LeavesEnhanced: Signet;
  A_Flame_ExtinguishedEnhanced: Signet;
}
export const Signets_of_Stars_Griseo: Signets_of_Stars_Griseo_interface = {
  Red__HotNormal: {
    label: 'Red & HotNormal',
    description:
      'Using a weapon active taints enemies nearby with red paint for 8s and makes them take 20% bonus Physical and Elemental DMG (cannot stack). Triggering it again resets the duration.',
  },
  Blue__ColdNormal: {
    label: 'Blue & ColdNormal',
    description:
      'Triggering an Ultimate Evasion Skill taints enemies nearby with blue paint for 8s and reduces their Total DMG and Move Speed by 30%. Triggering it again resets the duration.',
  },
  Yellow__WarmNormal: {
    label: 'Yellow & WarmNormal',
    description:
      'Using an Ultimate taints enemies nearby with yellow paint for 8s and makes them take 30% bonus Total DMG. Triggering it again resets the duration:',
  },
  Black__DarkNormal: {
    label: 'Black & DarkNormal',
    description:
      'Every time an enemy is tainted, Valkyries deals 10% bonus Physical and Elemental DMG for 20s. 4 stacks max.',
  },
  White__BrightNormal: {
    label: 'White & BrightNormal',
    description: 'Every time an enemy is tainted, Valkyrie restores 12 SP. CD: 5s.',
  },
  Grey__EmptyNormal: {
    label: 'Grey & EmptyNormal',
    description: 'Enemies stay tainted for 5s longer.',
  },
  Shining_Like_StarsCore: {
    label: 'Shining Like StarsCore',
    description:
      'When there are enemies tainted with 1/2/3 different paints, Valkyries deal 10%/20%/50% bonus Total DMG to enemies of countering types. Each type of nexus signet owned makes all enemies grant 10% Physical Breach (caps at 40%) and 5% Elemental Breach (caps at 20%).This signet cannot be upgraded.',
  },
  Blooming_Like_FlowersEnhanced: {
    label: 'Blooming Like FlowersEnhanced',
    description:
      'When enemies are tainted with both blue and red paints, Valkyries deal 50% more Total DMG to them. When a tainted enemy dies, enemies surrounding it will also be tainted with the same color after a 1s delay.',
  },
  Burning_Like_FlamesEnhanced: {
    label: 'Burning Like FlamesEnhanced',
    description:
      'When enemies are tainted with both yellow and red paints, Valkyries have 50% more Physical Breach and 25% more Elemental Breach against them.',
  },
  Stretching_Like_LeavesEnhanced: {
    label: 'Stretching Like LeavesEnhanced',
    description:
      'When enemies are tainted with both yellow and blue paints, Valkyrie attacks against them deal 3000% ATK of bonus Adaptive DMG to enemies within 6 meters. CD: 8s.',
  },
  Faded_StarsCore: {
    label: 'Faded StarsCore',
    description:
      'When tainted enemies are tainted another color, Blending is triggered, dealing 300% ATK of Adaptive DMG to enemies within 15m and tainting enemies purple, green, or orange based on the Enhanced Signet; CD: 1s. Total DMG increases 15% for each layer of taint, plus an additional 15% for enemies of a countered type.This signet cannot be upgraded.',
  },
  Petals_in_the_WindEnhanced: {
    label: 'Petals in the WindEnhanced',
    description:
      'When red and blue taints trigger Blending, deal 1200% and 500% ATK of Adaptive DMG to an enemy and those within 8meters of it respectively; CD: 3s. It also taints you purple for 15s. Each enhanced signet of a different Flame-Chaser owned improves the bonuses from red, yellow, and blue taints by 10% (caps at 40%); triggering it again refreshes its duration.',
  },
  Fallen_LeavesEnhanced: {
    label: 'Fallen LeavesEnhanced',
    description:
      'When yellow and blue taints trigger Blending, trigger an AoE ATK that deals 800% ATK of Adaptive DMG; CD: 3s. It also taints you green for 15s. Each enhanced signet of a different Flame-Chaser owned makes Faded Stars further increase Total DMG from each taint by 5% (caps at 20%); triggering it again resets the duration.',
  },
  A_Flame_ExtinguishedEnhanced: {
    label: 'A Flame ExtinguishedEnhanced',
    description:
      'When red and yellow taint triggers Blending, taint yourself with orange taint for 15s and trigger 2.5s of Time Fracture, reducing 20% Physical DEF and 10% Elemental Resist of all enemies. For every different type of Flame-Chaser enhanced signet owned, decrease all enemies Physical DEF by another 5% (max: 20%), Elemental Resist by 2.5% (max: 10%) for 10s. CD: 7s. Triggering it again resets the duration.',
  },
};
