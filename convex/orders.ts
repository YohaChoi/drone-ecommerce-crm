import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
    args: {
        byClientId: v.string(),
        productId: v.string(),
        productName: v.string(),
        clientName: v.string(),
        quantity: v.number(),
        total: v.number(),
        status: v.string()
    },
    handler: async (ctx, args) => {

        const productId = ctx.db.normalizeId("products",args.productId);
        if (!productId) {
            throw new Error("Product does not exist");
        }

        return await ctx.db.insert("orders", {
            byClientId: args.byClientId,
            productId: args.productId,
            productName: args.productName,
            clientName: args.clientName,
            quantity: args.quantity,
            total: args.total,
            status: 'COMPLETADO'
        });
    }
});

export const getOrders = query({
    args: {},
    handler: async (ctx) => {
        const orders =  await ctx.db.query('orders').collect();
        return orders.reverse()
    }
})

export const getDashboardData = query(async ({ db }) => {
    // Get all orders
    const orders = await db.query("orders").collect();
    
    // Calculate total sales
    const totalSales = orders.reduce((acc, order) => acc + order.total, 0);
    
    const m = new Map();

    orders.forEach((order) => {
        if (!m.has(order.productName)) {
            m.set(order.productName, order.quantity);
        } else {
            m.set(order.productName, m.get(order.productName) + order.quantity);
        }
    });
    
    let mostSoldProduct = "";
    let maxQuantity = 0;
    
    m.forEach((quantity, productName) => {
        if (quantity > maxQuantity) {
            mostSoldProduct = productName;
            maxQuantity = quantity;
        }
    });

    const clients = await db.query("clients").collect();
    const totalClients = clients.length;

    const sellers = await db.query("sellers").collect();
    const totalSellers = sellers.length;

    const cardData = [
        {
            label: "Total de Ventas",
            amount: `BOB ${totalSales.toFixed(2)}`,
            description: "+20.1% que el anterior dia",
            icon: "DollarSign"
        },
        {
            label: "Drone más Vendido",
            amount: `${maxQuantity}`,
            description: mostSoldProduct,
            icon: "Users"
        },
        {
            label: "Clientes",
            amount: `${totalClients}`,
            description: "+19% mque ayer",
            icon: "CreditCard"
        },
        {
            label: "Vendedores",
            amount: `${totalSellers}`,
            description: "",
            icon: "Activity"
        }
    ];

    return cardData;
});

