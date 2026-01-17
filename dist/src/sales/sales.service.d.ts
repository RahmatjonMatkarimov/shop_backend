import { PrismaService } from '../prisma/prisma.service';
import { StatisticsService } from './statistics.service';
export declare class SalesService {
    private prisma;
    private statisticsService;
    constructor(prisma: PrismaService, statisticsService: StatisticsService);
    create(data: any): Promise<{
        items: {
            id: number;
            saleId: number;
            productId: number;
            quantity: number;
            price: number;
        }[];
    } & {
        id: number;
        totalAmount: number;
        userId: number;
        createdAt: Date;
    }>;
    findAll(): Promise<({
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
        items: {
            id: number;
            saleId: number;
            productId: number;
            quantity: number;
            price: number;
        }[];
    } & {
        id: number;
        totalAmount: number;
        userId: number;
        createdAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SaleClient<({
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
        items: ({
            product: {
                id: number;
                name: string;
                price: number;
                costPrice: number | null;
                quantity: number;
                barcode: string | null;
                boxBarcode: string | null;
                itemsPerBox: number;
                userId: number;
                categoryId: number | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            saleId: number;
            productId: number;
            quantity: number;
            price: number;
        })[];
    } & {
        id: number;
        totalAmount: number;
        userId: number;
        createdAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getDashboardStats(): Promise<{
        totalSales: number;
        totalRevenue: number;
        totalExpense: number;
        totalProfit: number;
        totalProducts: number;
        totalDebts: number;
        recentSales: ({
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
            totalAmount: number;
            userId: number;
            createdAt: Date;
        })[];
    }>;
    getStats(userId?: number): Promise<{
        stats: {
            label: string;
            revenue: number;
            profit: number;
            expense: number;
            products: number;
            debts: number;
        }[];
        todayRevenue: number;
        todayCount: number;
    }>;
    getTopSellingProducts(userId?: number, limit?: number): Promise<{
        soldQuantity: number | null;
        category?: {
            id: number;
            name: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null | undefined;
        id?: number | undefined;
        name?: string | undefined;
        price?: number | undefined;
        costPrice?: number | null | undefined;
        quantity?: number | undefined;
        barcode?: string | null | undefined;
        boxBarcode?: string | null | undefined;
        itemsPerBox?: number | undefined;
        userId?: number | undefined;
        categoryId?: number | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[]>;
    getCategoryStats(userId?: number): Promise<{
        id: number;
        name: string;
        productCount: number;
    }[]>;
    exportSalesToCsv(userId?: number, startDate?: Date, endDate?: Date): Promise<string>;
    clearAllSales(): Promise<{
        message: string;
    }>;
}
