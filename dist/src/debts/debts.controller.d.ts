import { DebtsService } from './debts.service';
import { Prisma } from '@prisma/client';
export declare class DebtsController {
    private readonly debtsService;
    constructor(debtsService: DebtsService);
    create(createDebtDto: any, req: any): Prisma.Prisma__DebtClient<{
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
    findAll(req: any): Prisma.PrismaPromise<({
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
    findOne(id: string): Prisma.Prisma__DebtClient<({
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
    update(id: string, updateDebtDto: Prisma.DebtUpdateInput): Prisma.Prisma__DebtClient<{
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
    pay(id: string, amount: number): Promise<{
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
    remove(id: string): Prisma.Prisma__DebtClient<{
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
