export interface CandidateData {
  candidate: Candidate;
}

export interface Candidate {
  promotionalImageUrl: string;
  promotionalMessage: string;
  fullName: string;
  contact: Contact;
  id: string;
  locationLinks: any[];
  activitiesCount: number;
  networkMembersCount: number;
  address: Address;
}

export interface Contact {
  phone: null;
  web: null;
  whatsapp: null;
}

export interface Address {
  country: string;
  state?: string;
  city?: string;
}
