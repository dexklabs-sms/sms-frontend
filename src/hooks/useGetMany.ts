import { QueryKey, useQuery } from "@tanstack/react-query";
import { PaginatedResponse, User } from "@/app/(sms)/students/types";
import { axiosAuthenticatedClient } from "@/lib/axios";

// filters and sort are now string, later to be changed

interface IParams {
  resource: string;
  page?: number;
  perPage?: number;
  sort?: string;
  filter?: string;
  queryKey?: QueryKey;
}

export function useGetMany<T>({
  resource,
  page = 1,
  perPage = 10,
  sort,
  filter,
  queryKey,
}: IParams) {
  return useQuery({
    queryKey: queryKey ?? [resource, page, perPage, sort, filter],

    async queryFn({ signal }) {
      const response = await axiosAuthenticatedClient<PaginatedResponse<T>>(
        `https://dummyjson.com/${resource}/search?limit=10&skip=${(page - 1) * 10}`,
        { signal },
      );

      return response.data;
    },
  });
}
