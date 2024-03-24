import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const createSeller = mutation({
    args: {
        name: v.string(),
        phoneNumber: v.string(),
        email: v.string(),
        gender: v.string(),
        commisionPercentage: v.number()
    },
    handler: async (ctx, args) => {
       return await ctx.db.insert("sellers",{
            name: args.name,
            phoneNumber: args.phoneNumber,
            email: args.email,
            gender: args.gender,
            commisionPercentage: args.commisionPercentage
        })
    }
})

export const getSellers = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("sellers").collect()
    }
})