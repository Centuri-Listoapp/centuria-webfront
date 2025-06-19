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
}

export interface Contact {
  phone: null;
  web: null;
  whatsapp: null;
}
