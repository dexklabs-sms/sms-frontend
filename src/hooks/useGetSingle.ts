import { QueryKey, useQuery } from "@tanstack/react-query";
import { PaginatedResponse, User } from "@/app/(sms)/students/types";
import { axiosAuthenticatedClient } from "@/lib/axios";

interface IParams {
  resource: string;
  id: string | number;
  queryKey?: QueryKey;
}

export function useGetSingle<T>({ resource, id, queryKey }: IParams) {
  const query = useQuery({
    queryKey: queryKey ?? [resource, id],

    async queryFn({ signal }) {
      const response = await axiosAuthenticatedClient<PaginatedResponse<T>>(
        `https://dummyjson.com/${resource}/${id}`,
        { signal },
      );

      return response.data;
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    query,
  } as const;
}
