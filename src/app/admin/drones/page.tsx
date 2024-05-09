'use client'
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/action/products.actions";

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Nombre"
  },
  {
    accessorKey: "description",
    header: "Descripcion"
  },
  {
    accessorKey: "stock",
    header: "Stock"
  },
  {
    accessorKey: "price",
    header: "Precio"
  }
];

export default function UsersPage({}: Props) {
  const [drones, setDrones] = useState<any>([])

  useEffect(() => {
    const products = async () => {
      const res = await getProducts()
      setDrones(res)
    }

    products()
  },[])

  return (
    <div className="flex flex-col gap-5  w-full">
      <div className="flex flex-row w-full justify-between">
        <PageTitle title="Drones" />
        <Button
          onClick={() => {}}
        >Agregar Dron</Button>
      </div>
      <DataTable columns={columns} data={drones ?? []} />
    </div>
  );
}
