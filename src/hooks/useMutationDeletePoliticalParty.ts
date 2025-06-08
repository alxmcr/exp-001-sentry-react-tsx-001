import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PoliticalPartiesAPIImpl } from "../api/political-parties-api.impl";

export function useMutationDeletePoliticalParty() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await new PoliticalPartiesAPIImpl().delete(id);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["politicalParties"] });
      toast.success("Political party deleted successfully");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to delete political party");
    },
  });

  return mutation;
}
