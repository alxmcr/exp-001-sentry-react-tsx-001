import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PoliticalPartiesAPIImpl } from "../api/political-parties-api.impl";
import type { PoliticalPartyDataEdit } from "../types/service-types";

export function useMutationUpdatePoliticalParty() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      id,
      politicalParty,
    }: {
      id: number;
      politicalParty: PoliticalPartyDataEdit;
    }) => {
      const response = await new PoliticalPartiesAPIImpl().update(
        id,
        politicalParty
      );
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["politicalParties"] });
      toast.success("Political party updated successfully");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to update political party");
    },
  });

  return mutation;
}