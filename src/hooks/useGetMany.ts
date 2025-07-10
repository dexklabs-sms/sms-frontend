import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { PaginatedResponse } from "@/app/(sms)/students/types";
import { axiosAuthenticatedClient } from "@/lib/axios";

// filters and sort are now string, later to be changed

interface IParams<T> {
  resource: string;
  page?: number;
  perPage?: number;
  sort?: { by: string; order: "asc" | "desc" };
  filter?: Record<string, any>;
  queryKey?: QueryKey;
  search?: string;
  queryOptions?: Omit<
    UseQueryOptions<PaginatedResponse<T>>,
    "queryKey" | "queryFn"
  >;
}

export function useGetMany<T>({
  resource,
  page = 1,
  perPage = 10,
  sort,
  filter,
  queryKey,
  search,
  queryOptions = {},
}: IParams<T>) {
  return useQuery({
    queryKey: queryKey ?? [resource, page, perPage, sort, filter, search],
    async queryFn({ signal }) {
      const params: Record<string, any> = {
        ...(filter ?? {}),
        perPage: perPage,
        page,
      };

      if (sort) {
        params.sort = sort.by;
        params.sortBy = sort.order;
      }

      if (search) {
        params.search = search;
      }

      const response = await axiosAuthenticatedClient<PaginatedResponse<T>>(
        resource,
        {
          signal,
          params,
        },
      );

      return response.data;
    },
    ...queryOptions,
  });
}
