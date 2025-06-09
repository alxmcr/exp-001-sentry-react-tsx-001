import toast from "react-hot-toast";
import { PoliticalPartiesAPIImpl } from "../api/political-parties-api.impl";
import type { PoliticalPartyDataNew } from "../types/service-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Sentry from "@sentry/react";

export function useMutationCreatePoliticalParty() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (politicalParty: PoliticalPartyDataNew) => {
      const response = await new PoliticalPartiesAPIImpl().create(
        politicalParty
      );

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["politicalParties"] });
      toast.success("Political party created successfully");
    },
    onError: (error: Error) => {
      console.log({ error });
      toast.error("Failed to create political party");

      Sentry.captureException(error);

    },
  });

  return mutation;
}
