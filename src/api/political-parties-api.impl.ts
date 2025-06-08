import type {
  PoliticalPartyDataEdit,
  PoliticalPartyDataNew,
  PoliticalPartyResponse,
} from "../types/service-types";
import type { PoliticalPartyData } from "../types/service-types";
import { type PoliticalPartiesAPI } from "./political-parties-api";

export class PoliticalPartiesAPIImpl implements PoliticalPartiesAPI {
  private readonly baseUrl = "http://localhost:5500/api/political-parties";

  async findAll(): Promise<PoliticalPartyResponse> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: PoliticalPartyResponse = await response.json();
    return data;
  }
  async findById(id: number): Promise<PoliticalPartyData> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: PoliticalPartyData = await response.json();
    return data;
  }
  async create(
    politicalParty: PoliticalPartyDataNew
  ): Promise<PoliticalPartyData> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(politicalParty),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: PoliticalPartyData = await response.json();
    return data;
  }
  async update(
    id: number,
    politicalParty: PoliticalPartyDataEdit
  ): Promise<PoliticalPartyData> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(politicalParty),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: PoliticalPartyData = await response.json();
    return data;
  }
  async delete(id: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
}
