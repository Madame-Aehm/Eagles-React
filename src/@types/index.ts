export type NotOk = {
  error: string;
};

export type Comment = {
  id: string
  userID: string
  user: string
  characterID: string
  comment: string
  date: number
}

export type CharacterFetchResponse = {
  info: Info;
  results: Character[];
};

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
  Genderless = "Genderless",
}

export interface Location {
  name: string;
  url: string;
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

// export type User = {
//   email: string;
//   userName: string;
// };
