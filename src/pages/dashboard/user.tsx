import { useMemo } from "react";
import BasicTable from "../../components/ui/table";
import { userData } from "../../data";
import { type ColumnDef } from "@tanstack/react-table";

type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  dob: string;
};

const User = () => {
  const data = useMemo<UserType[]>(() => userData, []);

  const columns: ColumnDef<UserType>[] = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of birth",
      accessorKey: "dob",
      footer: "Date of birth",
      cell: (info) => {
        const rawDate = info.getValue() as string;
        return rawDate
          ? new Intl.DateTimeFormat("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }).format(new Date(rawDate))
          : "";
      },
    },
  ];

  return (
    <div>
      <BasicTable heading="All Users" data={data} columns={columns} />
    </div>
  );
};

export default User;
