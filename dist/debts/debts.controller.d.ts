import { DebtsService } from './debts.service';
import { Prisma } from '@prisma/client';
export declare class DebtsController {
    private readonly debtsService;
    constructor(debtsService: DebtsService);
    create(createDebtDto: Prisma.DebtCreateInput): Prisma.Prisma__DebtClient<{
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
    findOne(id: string): Prisma.Prisma__DebtClient<({
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
    update(id: string, updateDebtDto: Prisma.DebtUpdateInput): Prisma.Prisma__DebtClient<{
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
    pay(id: string, amount: number): Promise<{
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
    remove(id: string): Prisma.Prisma__DebtClient<{
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
