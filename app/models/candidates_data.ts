export interface CandidatesData {
  candidates: Candidates;
}

export interface Candidates {
  pages: number;
  total: number;
  data: Candidate[];
}

export interface Candidate {
  contact: Contact;
  fullName: string;
  id: string;
  promotionalImageUrl: null | string;
  promotionalMessage: string;
  isActive: boolean;
  email: string;
  enabledFeatures: any[];
  phone: null | string;
  address: Address;
  wards: Ward[];
  activitiesCount: number;
  networkMembersCount: number;
}

export interface Address {
  city: null | string;
  country: string;
  state: null | string;
}

export interface Contact {
  phone: string;
  whatsapp: null | string;
  web: null;
}

export interface Ward {
  id: string;
  municipality: string;
  state: string;
  title: string;
  whatsappLink: string;
}
