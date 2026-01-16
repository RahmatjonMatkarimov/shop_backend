import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class DebtsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Prisma.Prisma__DebtClient<{
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        userId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
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
    } & {
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        userId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Prisma.Prisma__DebtClient<({
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
    } & {
        id: number;
        customerName: string;
        amount: number;
        description: string | null;
        userId: number;
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
        userId: number;
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
        userId: number;
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
        userId: number;
        isPaid: boolean;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
