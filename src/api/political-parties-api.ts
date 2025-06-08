import type { PoliticalPartyData, PoliticalPartyDataNew, PoliticalPartyResponse } from "../types/service-types";

export interface PoliticalPartiesAPI {
  findAll: () => Promise<PoliticalPartyResponse>;
  findById: (id: number) => Promise<PoliticalPartyData>;
  create: (
    politicalParty: PoliticalPartyDataNew
  ) => Promise<PoliticalPartyData>;
  update: (
    id: number,
    politicalParty: PoliticalPartyData
  ) => Promise<PoliticalPartyData>;
  delete: (id: number) => Promise<void>;
}
