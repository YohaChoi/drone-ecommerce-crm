import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createClient = mutation({
    args: {
        name: v.string(),
        phoneNumber: v.string(),
        email: v.string(),
        gender: v.string()
    },
    handler: async (ctx, args) => {
       return await ctx.db.insert("clients",{
            name: args.name,
            phoneNumber: args.phoneNumber,
            email: args.email,
            gender: args.gender
        })
    }
})

export const getClients = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("clients").collect()
    }
})