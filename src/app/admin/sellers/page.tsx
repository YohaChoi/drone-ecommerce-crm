/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getSellers } from "@/lib/action/sellers.actions";

type Props = {};
const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "commisionPercentage",
    header: "Comision de Venta",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <p>{row.getValue("commisionPercentage")} % </p>
        </div>
      );
    }
  },
  {
    accessorKey: "phoneNumber",
    header: "Numero de Telefono"
  }
];


export default function UsersPage({}: Props) {
  const [sellers, setSellers] = useState<any>([])

  useEffect(() => {
    const clients = async () => {
      const res = await getSellers()
      setSellers(res)
    }

    clients()
  },[])

  const router = useRouter();

  const handleClick = () => {
    router.push('/admin/sellers/create')
  }

  return (
    <div className="flex flex-col gap-5  w-full">
      <div className="flex flex-row w-full justify-between">
        <PageTitle title="Vendedores" />
        <Button
          onClick={() => handleClick()}
        >Crear Vendedor</Button>
      </div>

      <DataTable columns={columns} data={sellers ?? []} />
    </div>
  );
}
