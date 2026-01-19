import { StatisticsService } from './statistics.service';
import type { Response } from 'express';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    getDashboardStats(req: any, startDate?: string, endDate?: string): Promise<{
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
    getSalesStats(userId?: string, startDate?: string, endDate?: string): Promise<{
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
    getTopSelling(userId?: string, limit?: string): Promise<{
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
        unit?: string | undefined;
        barcode?: string | null | undefined;
        boxBarcode?: string | null | undefined;
        itemsPerBox?: number | undefined;
        userId?: number | undefined;
        categoryId?: number | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[]>;
    getCategoryStats(userId?: string): Promise<{
        id: number;
        name: string;
        productCount: number;
    }[]>;
    exportSales(res: Response, userId?: string, startDate?: string, endDate?: string): Promise<void>;
}
