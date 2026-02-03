import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class DebtsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Prisma.Prisma__DebtClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        customerName: string;
        amount: number;
        description: string | null;
        isPaid: boolean;
        dueDate: Date | null;
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
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        customerName: string;
        amount: number;
        description: string | null;
        isPaid: boolean;
        dueDate: Date | null;
    })[]>;
    findOne(id: number): Prisma.Prisma__DebtClient<({
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
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        customerName: string;
        amount: number;
        description: string | null;
        isPaid: boolean;
        dueDate: Date | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.DebtUpdateInput): Prisma.Prisma__DebtClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        customerName: string;
        amount: number;
        description: string | null;
        isPaid: boolean;
        dueDate: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    pay(id: number, amount: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        customerName: string;
        amount: number;
        description: string | null;
        isPaid: boolean;
        dueDate: Date | null;
    }>;
    remove(id: number): Prisma.Prisma__DebtClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        customerName: string;
        amount: number;
        description: string | null;
        isPaid: boolean;
        dueDate: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
