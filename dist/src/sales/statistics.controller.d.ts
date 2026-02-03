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
            createdAt: Date;
            userId: number;
            totalAmount: number;
        })[];
    }>;
    getSalesStats(req: any, startDate?: string, endDate?: string): Promise<{
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
    getTopSelling(req: any, limit?: string): Promise<{
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
    getCategoryStats(req: any): Promise<{
        id: number;
        name: string;
        productCount: number;
    }[]>;
    exportSales(req: any, res: Response, startDate?: string, endDate?: string): Promise<void>;
}
