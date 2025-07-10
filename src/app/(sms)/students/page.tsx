"use client";

import { User } from "./types";
import { useState } from "react";
import { useGetMany } from "@/hooks/useGetMany";
import { DataTable } from "mantine-datatable";
import { Paper, Stack } from "@mantine/core";

export default function StudentsPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetMany<User>({
    resource: "users/search",
    page,
    perPage: 10,
  });

  return (
    <Stack p={"md"}>
      <Paper withBorder maw={800}>
        <DataTable
          withTableBorder={false}
          borderRadius="sm"
          striped
          height={300}
          highlightOnHover
          fetching={isLoading}
          // provide data
          records={data?.users!}
          // define columns
          columns={[
            {
              accessor: "Name",
              render(row) {
                return row.firstName + " " + row.lastName;
              },
            },
            { accessor: "email" },
            { accessor: "company.name" },
          ]}
          page={page}
          onPageChange={(p) => setPage(p)}
          totalRecords={data?.total ?? 0}
          recordsPerPage={10}
        />
      </Paper>
    </Stack>
  );

  // const rows = data!.users.map((row) => (
  //   <TableTr key={row.id}>
  //     <TableTd>{row.firstName + " " + row.lastName}</TableTd>
  //     <TableTd>{row.email}</TableTd>
  //     <TableTd>{row.company.name}</TableTd>
  //   </TableTr>
  // ));
  //
  // return (
  //   <Stack p={"md"}>
  //     <Paper withBorder maw={800}>
  //       {isLoading ? (
  //         <div>Loading...</div>
  //       ) : (
  //         <ScrollArea h={300}>
  //           <Table miw={700}>
  //             <TableThead>
  //               <TableTr>
  //                 <TableTh>Name</TableTh>
  //                 <TableTh>Email</TableTh>
  //                 <TableTh>Company</TableTh>
  //               </TableTr>
  //             </TableThead>
  //             <TableTbody>{rows}</TableTbody>
  //           </Table>
  //         </ScrollArea>
  //       )}
  //     </Paper>
  //
  //     <Pagination
  //       total={data ? Math.round(data.total / 10) : 0}
  //       value={page}
  //       onChange={(e) => setPage(e)}
  //     />
  //   </Stack>
}
