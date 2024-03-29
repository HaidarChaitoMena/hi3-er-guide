import { valkeryType } from '@/types/Valkery';
import Dreamweaver from './valks/Dreamweaver/valk';
import HerrscherofHumanity from './valks/HerrscherofHumanity/valk';
import HerrscherofOrigin from './valks/HerrscherofOrigin/valk';
import HerrscherofRebirth from './valks/HerrscherofRebirth/valk';
import JadeKnight from './valks/JadeKnight/valk';
import InfiniteOuroboros from './valks/InfiniteOuroboros/valk';
import ReveristCalico from './valks/ReveristCalico/valk';
import { compareValkeriesTier } from '@/helpers/functions';
import ChronoNavi from './valks/ChronoNavi/valk';
import HerrscherofFinality from './valks/HerrscherofFinality/valk';
import HerrscherofTruth from './valks/HerrscherofTruth/valk';
import StarryImpression from './valks/StarryImpression/valk';
import SugaryStarburst from './valks/SugaryStarburst/valk';
import TerminalAide0017 from './valks/TerminalAide0017/valk';
import VermilionKnightEclipse from './valks/VermilionKnightEclipse/valk';
import LunarVow from './valks/LunarVow/valk';
import CosmicExpression from './valks/CosmicExpression/valk';

// Add Broke mode valks here
const brokValks: valkeryType[] = [
  Dreamweaver,
  HerrscherofHumanity,
  HerrscherofOrigin,
  HerrscherofRebirth,
  JadeKnight,
  InfiniteOuroboros,
  ReveristCalico,
  CosmicExpression,
  ChronoNavi,
  HerrscherofFinality,
  HerrscherofTruth,
  StarryImpression,
  SugaryStarburst,
  TerminalAide0017,
  VermilionKnightEclipse,
  LunarVow,
];

brokValks.sort(compareValkeriesTier);

export const brokeValks = brokValks;
