import { useQuery } from "@tanstack/react-query";

import { PoliticalPartiesAPIImpl } from "../api/political-parties-api.impl";
import type { PoliticalPartyResponse } from "../types/service-types";

export function usePoliticalParties() {
  const {
    data: politicalParties,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<PoliticalPartyResponse, Error>({
    queryKey: ["politicalParties"],
    queryFn: () => new PoliticalPartiesAPIImpl().findAll(),
    retry: 5, // Only retry once on failure
    staleTime: 5 * 60 * 1000, // Consider data stale after 5 minutes
    refetchOnMount: true, // Refetch when component mounts
    refetchOnWindowFocus: true, // Refetch when window regains focus
    refetchOnReconnect: true, // Refetch when reconnecting
  });

  return {
    politicalParties,
    isLoading,
    isError,
    error: error?.message || null,
    refetch,
  };
}