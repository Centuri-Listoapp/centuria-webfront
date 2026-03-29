export interface SaveCandidateVotingCenterDto {
  name: string;
  address: Address;
  networkGoalCount: number;
  numberOfVoters: number;
  contactUrl?: string;
  locationLinks?: any[];
}

export interface Address {
  city: string;
  state: string;
  country: string;
  coordinates?: Coordinates;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface DeleteCountryMunicipalityDto {
  countryCode: string;
  stateCode: string;
  municipalityCode: string;
}
