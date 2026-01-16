import { ShopsService } from './shops.service';
import { Prisma } from '@prisma/client';
export declare class ShopsController {
    private readonly shopsService;
    constructor(shopsService: ShopsService);
    create(createShopDto: Prisma.ShopCreateInput, req: any): Prisma.Prisma__ShopClient<{
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
    findOne(id: string): Prisma.Prisma__ShopClient<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateShopDto: Prisma.ShopUpdateInput): Prisma.Prisma__ShopClient<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__ShopClient<{
        id: number;
        name: string;
        description: string | null;
        ownerId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
