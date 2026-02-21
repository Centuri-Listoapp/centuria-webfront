export interface StatesByCountryData {
  statesByCountry: StatesByCountry[];
}

export interface StatesByCountry {
  code: string;
  name: string;
  cities: City[];
}

export interface City {
  code: string;
  name: string;
}
