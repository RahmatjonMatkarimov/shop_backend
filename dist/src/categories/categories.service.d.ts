import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
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
        _count: {
            products: number;
        };
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    })[]>;
    findOne(id: number): Prisma.Prisma__CategoryClient<({
        products: {
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
        }[];
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
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.CategoryUpdateInput): Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
