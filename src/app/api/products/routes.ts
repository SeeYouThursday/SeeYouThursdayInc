import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export const productsRoutes = {
    getAllProducts: async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const products = await prisma.product.findMany();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Failed to load products' });
        }
    },

    getProduct: async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const id = req.query.id;
            const product = await prisma.product.findUnique({
                where: { id: Number(id) },
            });
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to load product' });
        }
    },

    createProduct: async (req: NextApiRequest, res: NextApiResponse) => {
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
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create product' });
        }
    },

    updateProduct: async (req: NextApiRequest, res: NextApiResponse) => {
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
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update product' });
        }
    },

    deleteProduct: async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const id = req.query.id;
            await prisma.product.delete({
                where: { id: Number(id) },
            });
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete product' });
        }
    },
};