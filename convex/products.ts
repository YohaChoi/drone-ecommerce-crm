import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const createProduct = mutation({
    args: {
        name: v.string(),
        subtitle: v.string(),
        description: v.string(),
        price: v.number(),
        stock: v.number(),
        imageUrl: v.string()
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("products",{
            name: args.name,
            subtitle: args.subtitle,
            description: args.description,
            price: args.price,
            stock: args.stock,
            imageUrl: args.imageUrl
        })
    }
})

export const getProducts = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("products").collect();
    }
})

export const getProduct = query({
    args: {
        productId: v.string()
    },
    handler: async (ctx,args) => {
        const id = await ctx.db.normalizeId("products", args.productId);
        if(!id){
            throw new Error("Invalid Id");
        }
        return await ctx.db.get(id);
    }
})