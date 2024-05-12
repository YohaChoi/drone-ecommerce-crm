'use client'
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { createSeller } from "@/lib/action/sellers.actions";

type FormValues = {
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
};

const schema = z.object({
  name: z.string().min(1, "El nombre de usuario es obligatorio"),
  phoneNumber: z.string().min(1, "El número de teléfono es obligatorio"),
  email: z.string().email("El correo electrónico no es válido").min(1, "El correo electrónico es obligatorio"),
  gender: z.string().min(1, "El género es obligatorio"),
});

function Page() {

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const create = async (data: FormValues) => {
    await createSeller({
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      gender: data.gender
    })
    router.push('/admin/sellers')
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('here')
    console.log(data);
    create(data)
  };

  return (
    <FormProvider {...form}>
      <div>
        <Button onClick={() => handleBackClick()} variant="outline" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className=" flex flex-col w-full justify-center items-center">
        <div className="w-1/2 flex flex-col gap-y-5">
          <div>
            <h1 className="font-semibold text-2xl my-10">Nuevo Vendedor</h1>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-10 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="nombre" {...field} />
                  </FormControl>
                  <FormDescription>
                    Este es su nombre público.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de teléfono</FormLabel>
                  <FormControl>
                    <Input placeholder="número de teléfono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="correo electrónico" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Género</FormLabel>
                  <FormControl>
                    <Input placeholder="género" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
            >
              Crear
            </Button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}

export default Page;
