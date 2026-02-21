export interface LoginData {
  login: Login;
}

export interface Login {
  refreshToken: string;
  token: string;
  user: User;
}

export interface User {
  createdAt: Date;
  dni: string;
  email: string;
  phone: string;
  id: string;
  fullName: string;
  referralCode: string;
  updatedAt: Date;
  address: Address;
  role: string;
  gender: string;
  dateOfBirth: number;
  referredBy: ReferredBy;
}

export interface Address {
  city: null;
  state: string;
  country: string;
}

export interface ReferredBy {
  fullName: string;
  id: string;
}
