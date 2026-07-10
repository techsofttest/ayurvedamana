export interface SuccessStory {
  id: string;
  patientName: string;
  country: string;
  flag: string;
  condition: string;
  quote?: string;
  before?: string;
  after?: string;
  hasVideo: boolean;
  video?: string;
  coverPhoto?: string;
}
