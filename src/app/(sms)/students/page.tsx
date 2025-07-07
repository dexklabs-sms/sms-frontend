"use client";

import {
  Pagination,
  Paper,
  ScrollArea,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import axios from "axios";
import { PaginatedResponse, User } from "./types";
import { use, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useGetMany } from "@/hooks/use-get-many";
import { useGetSingle } from "@/hooks/useGetSingle";

export default function StudentsPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetMany<User>({
    resource: "users",
    page,
    perPage: 10,
  });

  const singleStudent = useGetSingle<User>({ resource: "users", id: 1 });

  const rows = data?.users.map((row) => (
    <TableTr key={row.id}>
      <TableTd>{row.firstName + " " + row.lastName}</TableTd>
      <TableTd>{row.email}</TableTd>
      <TableTd>{row.company.name}</TableTd>
    </TableTr>
  ));

  return (
    <Stack p={"md"}>
      <Paper withBorder maw={800}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ScrollArea h={300}>
            <Table miw={700}>
              <TableThead>
                <TableTr>
                  <TableTh>Name</TableTh>
                  <TableTh>Email</TableTh>
                  <TableTh>Company</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>{rows}</TableTbody>
            </Table>
          </ScrollArea>
        )}
      </Paper>

      <Pagination
        total={data ? Math.round(data.total / 10) : 0}
        value={page}
        onChange={(e) => setPage(e)}
      />
    </Stack>
  );
}
