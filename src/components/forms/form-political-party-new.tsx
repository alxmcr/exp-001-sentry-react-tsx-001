import React from "react";
import { useMutationCreatePoliticalParty } from "../../hooks/useMutationCreatePoliticalParty";
import type { PoliticalPartyDataNew } from "../../types/service-types";

export function FormPoliticalPartyNew() {
  const [name, setName] = React.useState("");
  const [abbreviation, setAbbreviation] = React.useState("");
  const [presidentialCandidate, setPresidentialCandidate] = React.useState("");
  const [vicePresidentialCandidate, setVicePresidentialCandidate] =
    React.useState("");
  const mutation = useMutationCreatePoliticalParty();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: PoliticalPartyDataNew = {
      name,
      abbreviation,
      presidential_candidate: presidentialCandidate,
      vice_presidential_candidate: vicePresidentialCandidate,
    };
    console.log("🚀 ~ handleSubmit ~ data:", data);

    // Mutation
    await mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-lg flex flex-col gap-1.5"
    >
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
      </div>
      <div>
        <label>Abbreviation:</label>
        <input
          value={abbreviation}
          onChange={(e) => setAbbreviation(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
      </div>
      <div>
        <label>Presidential Candidate:</label>
        <input
          value={presidentialCandidate}
          onChange={(e) => setPresidentialCandidate(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
      </div>
      <div>
        <label>Vice Presidential Candidate:</label>
        <input
          value={vicePresidentialCandidate}
          onChange={(e) => setVicePresidentialCandidate(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          disabled={mutation.isPending}
          className="border rounded-lg p-2 bg-black text-white hover:bg-gray-500"
        >
          {mutation.isPending ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
