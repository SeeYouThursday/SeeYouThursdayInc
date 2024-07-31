import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const productsRoutes = {
    getAllProducts: async (req: NextRequest, res: NextResponse) => {
        try {
            const products = await prisma.product.findMany();
           NextResponse.json(products);
        } catch (error) {
            NextResponse.json({ error } , {status: 500});
        }
    },
}