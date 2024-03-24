'use client'
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";


export default function Home() {

  const cardData = useQuery(api.orders.getDashboardData);
  const usersSalesData = useQuery(api.orders.getOrders);
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Drone CRM Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData && cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            discription={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Vista General</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Ultimas Ventas</p>
            <p className="text-sm text-gray-400">
              Estas son las ultimas 6 Ventas del dia.
            </p>
          </section>
          {usersSalesData && usersSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.clientName}
              name={d.productName}
              saleAmount={`${d.total}`}
            />
          ))}
        </CardContent>

        {/*  */}
      </section>
      <section className="grid grid-cols-1  gap-4 transition-all">
      <CardContent className="flex justify-between gap-4">
          <section>
            <p>Top 3 Vendores</p>
            <p className="text-sm text-gray-400">
              Estos son los mejores vendedores
            </p>
          </section>
          {/* {usersSalesData && usersSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))} */}
        </CardContent>
      </section>

    </div>
  );
}
