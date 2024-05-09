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
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { createProduct } from "@/lib/action/products.actions";
import { useRouter } from "next/navigation";

type FormValues = {
    description: string;
    imageUrl: string;
    name: string;
    price: string;
    stock: string;
    subtitle: string;
};

const schema = z.object({
  name: z.string().min(1, "El nombre del dron es obligatorio"),
  description: z.string().min(1, "El número de teléfono es obligatorio"),
  price: z.string(),
  stock: z.string(),
  subtitle: z.string(),
  imageUrl: z.string(),
});

function Page() {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  },
);


  const handleBackClick = () => {
  };

  const create = async (data: FormValues) => {
    try {
      const response = await createProduct({
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        price: parseInt(data.price, 10),
        stock: parseInt(data.stock, 10),
        subtitle: data.subtitle,
      })

      router.back()

    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data', data)
    create(data)
  }

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
            <h1 className="font-semibold text-2xl my-10">Nuevo Dron</h1>
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
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitulo</FormLabel>
                  <FormControl>
                    <Input placeholder="número de teléfono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Url</FormLabel>
                  <FormControl>
                    <Input placeholder="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input placeholder="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input placeholder="url" {...field} />
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
