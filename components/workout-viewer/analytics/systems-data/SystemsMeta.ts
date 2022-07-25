import {MuscleGroup} from './MuscleGroupsValues';
import {BodyPart, System} from './SystemsCommon';
import {MovementType} from './MovementTypeValues';

type SystemMetaInfo = {
  title: string;
  short: string;
  units: Record<string, string>;
  url?: string;
}
export const SystemsMeta: Record<System, SystemMetaInfo> = {
  [System.Muscle]: {
    title: 'Muscle Group',
    short: 'Muscle',
    units: MuscleGroup,
    url: 'https://rpstrength.com/expert-advice/hypertrophy-training-guide-central-hub'
  },
  [System.Movement]: {
    title: 'Movement type',
    short: 'Movement',
    units: MovementType
  },
  [System.BodyPart]: {
    title: 'Body part',
    short: 'Body part',
    units: BodyPart
  }
};