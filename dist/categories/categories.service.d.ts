import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.CategoryCreateInput): Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        _count: {
            products: number;
        };
    } & {
        id: number;
        name: string;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Prisma.Prisma__CategoryClient<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        products: {
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
        }[];
    } & {
        id: number;
        name: string;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.CategoryUpdateInput): Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__CategoryClient<{
        id: number;
        name: string;
        shopId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
