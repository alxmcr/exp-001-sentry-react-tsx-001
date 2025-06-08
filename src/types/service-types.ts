export enum LoadingStates {
  IDLE = "idle",
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PoliticalPartyData {
  id: number;
  name: string;
  abbreviation: string;
  founded_date: string;
  ideology: string[];
  leader: string;
  headquarters: string;
  website: string;
  number_of_members: number;
  ballot_status: string;
  presidential_candidate: string;
  vice_presidential_candidate: string;
}

export interface PoliticalPartyDataNew {
  name: string;
  abbreviation: string;
  presidential_candidate: string;
  vice_presidential_candidate: string;
}

export interface PoliticalPartyDataEdit {
  name: string;
  abbreviation: string;
  presidential_candidate: string;
  vice_presidential_candidate: string;
}

export interface PoliticalPartyResponse {
  total: number;
  data: PoliticalPartyData[];
}