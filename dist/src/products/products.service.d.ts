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
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        costPrice: number | null;
        quantity: number;
        unit: string;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        categoryId: number | null;
        userId: number;
    }>;
    addStock(id: number, quantity: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        costPrice: number | null;
        quantity: number;
        unit: string;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        categoryId: number | null;
        userId: number;
    }>;
    findByBarcode(barcode: string, userId: number): Promise<({
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            shopName: string | null;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        costPrice: number | null;
        quantity: number;
        unit: string;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        categoryId: number | null;
        userId: number;
    }) | null>;
    findAll(userId: number): Prisma.PrismaPromise<({
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            shopName: string | null;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        costPrice: number | null;
        quantity: number;
        unit: string;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        categoryId: number | null;
        userId: number;
    })[]>;
    findOne(id: number): Prisma.Prisma__ProductClient<({
        user: {
            id: number;
            email: string;
            password: string;
            name: string | null;
            shopName: string | null;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        costPrice: number | null;
        quantity: number;
        unit: string;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        categoryId: number | null;
        userId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.ProductUpdateInput): Prisma.Prisma__ProductClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        costPrice: number | null;
        quantity: number;
        unit: string;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        categoryId: number | null;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        costPrice: number | null;
        quantity: number;
        unit: string;
        barcode: string | null;
        boxBarcode: string | null;
        itemsPerBox: number;
        categoryId: number | null;
        userId: number;
    }>;
}
