import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            shopName: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            userId: number;
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
        userId: number;
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
        userId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByBarcode(barcode: string): Promise<({
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            shopName: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            userId: number;
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
        userId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    findAll(userId: number): Prisma.PrismaPromise<({
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            shopName: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            userId: number;
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
        userId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Prisma.Prisma__ProductClient<({
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            shopName: string | null;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            userId: number;
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
        userId: number;
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
        userId: number;
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
        userId: number;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
