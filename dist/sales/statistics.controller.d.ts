import { StatisticsService } from './statistics.service';
import type { Response } from 'express';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    getDashboardStats(startDate?: string, endDate?: string): Promise<{
        totalSales: number;
        totalRevenue: number;
        totalProducts: number;
        totalDebts: number;
        recentSales: ({
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
            totalAmount: number;
            shopId: number;
            createdAt: Date;
        })[];
    }>;
    getSalesStats(shopId?: string, startDate?: string, endDate?: string): Promise<{
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
    getTopSelling(shopId?: string, limit?: string): Promise<{
        soldQuantity: number | null;
        category?: {
            id: number;
            name: string;
            shopId: number;
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
        shopId?: number | undefined;
        categoryId?: number | null | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }[]>;
    getCategoryStats(shopId?: string): Promise<{
        id: number;
        name: string;
        productCount: number;
    }[]>;
    exportSales(res: Response, shopId?: string, startDate?: string, endDate?: string): Promise<void>;
}
