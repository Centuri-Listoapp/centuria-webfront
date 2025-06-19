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
}
