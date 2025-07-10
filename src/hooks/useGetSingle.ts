import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { axiosAuthenticatedClient } from "@/lib/axios";

interface IParams<T> {
  resource: string;
  id: string | number;
  queryKey?: QueryKey;
  queryOptions?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;
}

export function useGetSingle<T>({
  resource,
  id,
  queryKey,
  queryOptions = {},
}: IParams<T>) {
  const query = useQuery({
    queryKey: queryKey ?? [resource, id],

    async queryFn({ signal }) {
      const response = await axiosAuthenticatedClient<T>(`${resource}/${id}`, {
        signal,
      });

      return response.data;
    },
    ...queryOptions,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    query,
  } as const;
}
