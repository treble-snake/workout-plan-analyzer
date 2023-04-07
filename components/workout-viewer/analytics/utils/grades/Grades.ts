export enum VolumeGradeType {
  Low= 'Low',
  Ok = 'Ok',
  High = 'High',
  TooSpread = 'TooSpread',
  Uncertain = 'Uncertain',
  NoInfo = 'NoInfo',
}

export enum ConfidenceLevel {
  Low= 'Low',
  Moderate = 'Moderate',
  High = 'High'
}

export type VolumeGrade = {
  type: VolumeGradeType;
  confidence: ConfidenceLevel;
}