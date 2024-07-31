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


    createProduct: async (req: NextRequest, res: NextResponse) => {
        try {
            const product = await prisma.product.create({ 
                data: {
                    title: req.body.title,
                    shortTitle: req.body.shortTitle,
                    href: req.body.href,
                    description: req.body.description,
                    shortDescrip: req.body.shortDescrip,
                    img_url: req.body.img_url,
                    icon_url: req.body.icon_url,
                    stack: req.body.stack,
                } 
            });
           NextResponse.(201).json(product);
        } catch (error) {
           NextResponse.(500).json({ error: 'Failed to create product' });
        }
    },

    updateProduct: async (req: NextRequest, res: NextResponse) => {
        try {
            const id = req.query.id;
            const product = await prisma.product.update({
                where: { id: Number(id) },
                data: {
                    title: req.body.title,
                    shortTitle: req.body.shortTitle,
                    href: req.body.href,
                    description: req.body.description,
                    shortDescrip: req.body.shortDescrip,
                    img_url: req.body.img_url,
                    icon_url: req.body.icon_url,
                    stack: req.body.stack,
                },
            });
           NextResponse.(200).json(product);
        } catch (error) {
           NextResponse.(500).json({ error: 'Failed to update product' });
        }
    },

    deleteProduct: async (req: NextRequest, res: NextResponse) => {
        try {
            const id = req.query.id;
            await prisma.product.delete({
                where: { id: Number(id) },
            });
           NextResponse.(204).end();
        } catch (error) {
           NextResponse.(500).json({ error: 'Failed to delete product' });
        }
    },
};