export interface CandidateVotingCenterData {
  candidateVotingCenters: CandidateVotingCenter[];
}

export interface CandidateVotingCenter {
  contactUrl: null;
  id: string;
  name: string;
  networkGoalCount: number;
  address: Address;
}

export interface Address {
  country: string;
  state: string;
  city?: string;
  coordinates?: Coordinates;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface CandidateVotingCenterImportTemplateData {
  candidateVotingCenterImportTemplate: CandidateVotingCenterImportTemplate;
}

export interface CandidateVotingCenterImportTemplate {
  expiresAt: Date;
  url: string;
}

export interface ImportCandidateVotingCentersDto {
  file: File;
}

//importCandidateVotingCenters
export interface ImportCandidateVotingCentersData {
  importCandidateVotingCenters: ImportCandidateVotingCenters;
}

export interface ImportCandidateVotingCenters {
  duplicateCount: number;
  failedCount: number;
  processedRows: number;
  totalRows: number;
  unchangedCount: number;
  updatedCount: number;
  createdCount: number;
  rows: Row[];
}

export interface Row {
  message: string;
  reasonCode: string | null;
  rowNumber: number;
  status: string;
  votingCenterId: null | string;
}
