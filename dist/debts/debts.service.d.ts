import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class DebtsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.DebtCreateInput): Prisma.Prisma__DebtClient<{
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        shopId: number;
        isPaid: boolean;
        dueDate: Date | null;
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
    } & {
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        shopId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Prisma.Prisma__DebtClient<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        shopId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.DebtUpdateInput): Prisma.Prisma__DebtClient<{
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        shopId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    pay(id: number, amount: number): Promise<{
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        shopId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Prisma.Prisma__DebtClient<{
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        shopId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
