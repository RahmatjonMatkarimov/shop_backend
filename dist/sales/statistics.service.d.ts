import { PrismaService } from '../prisma/prisma.service';
import { Workbook } from 'exceljs';
export declare class StatisticsService {
    private prisma;
    constructor(prisma: PrismaService);
    getDashboardStats(startDate?: Date, endDate?: Date): Promise<{
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
    getSalesStats(shopId?: number, startDate?: Date, endDate?: Date): Promise<{
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
    getTopSellingProducts(shopId?: number, limit?: number): Promise<{
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
    getCategoryStats(shopId?: number): Promise<{
        id: number;
        name: string;
        productCount: number;
    }[]>;
    exportSalesToExcel(shopId?: number, startDate?: Date, endDate?: Date): Promise<Workbook>;
    exportSalesToCsv(shopId?: number, startDate?: Date, endDate?: Date): Promise<string>;
}
