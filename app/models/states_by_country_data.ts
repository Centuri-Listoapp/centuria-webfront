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
export interface CountriesData {
  countries: Country[];
}

export interface Country {
  code: string;
  name: string;
  states: StatesByCountry[];
}
