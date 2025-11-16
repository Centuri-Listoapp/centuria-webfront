export interface CreateProspectDto {
  candidateId: string;
  fullName: string;
  email: string;
  address: Address;
  captchaToken: string;
  phone?: string;
  votingCenterId?: string;
}

interface Address {
  country: string;
}
