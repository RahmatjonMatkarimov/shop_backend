import { PrismaService } from '../prisma/prisma.service';
import { StatisticsService } from './statistics.service';
export declare class SalesService {
    private prisma;
    private statisticsService;
    constructor(prisma: PrismaService, statisticsService: StatisticsService);
    create(data: any): Promise<{
        items: {
            id: number;
            price: number;
            quantity: number;
            saleId: number;
            productId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        totalAmount: number;
    }>;
    findAll(userId: number): Promise<({
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
            };
        } & {
            id: number;
            price: number;
            quantity: number;
            saleId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        totalAmount: number;
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
            };
        } & {
            id: number;
            price: number;
            quantity: number;
            saleId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        totalAmount: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getDashboardStats(userId: number): Promise<{
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
            createdAt: Date;
            userId: number;
            totalAmount: number;
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
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null | undefined;
        id?: number | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        price?: number | undefined;
        costPrice?: number | null | undefined;
        quantity?: number | undefined;
        unit?: string | undefined;
        barcode?: string | null | undefined;
        boxBarcode?: string | null | undefined;
        itemsPerBox?: number | undefined;
        categoryId?: number | null | undefined;
        userId?: number | undefined;
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
