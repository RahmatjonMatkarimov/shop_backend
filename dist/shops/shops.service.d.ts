import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ShopsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ShopCreateInput, ownerId: number): Prisma.Prisma__ShopClient<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Prisma.Prisma__ShopClient<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.ShopUpdateInput): Prisma.Prisma__ShopClient<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__ShopClient<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
