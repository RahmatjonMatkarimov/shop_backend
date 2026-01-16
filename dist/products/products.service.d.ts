import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: number;
        name: string;
        price: number;
        costPrice: number | null;
        quantity: number;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        shopId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addStock(id: number, quantity: number): Promise<{
        id: number;
        name: string;
        price: number;
        costPrice: number | null;
        quantity: number;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        shopId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByBarcode(barcode: string): Promise<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: number;
        name: string;
        price: number;
        costPrice: number | null;
        quantity: number;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        shopId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    findAll(): Prisma.PrismaPromise<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: number;
        name: string;
        price: number;
        costPrice: number | null;
        quantity: number;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        shopId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Prisma.Prisma__ProductClient<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: number;
        name: string;
        price: number;
        costPrice: number | null;
        quantity: number;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        shopId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.ProductUpdateInput): Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        price: number;
        costPrice: number | null;
        quantity: number;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        shopId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        price: number;
        costPrice: number | null;
        quantity: number;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        shopId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
