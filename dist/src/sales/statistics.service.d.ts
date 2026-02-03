import { PrismaService } from '../prisma/prisma.service';
import { Workbook } from 'exceljs';
export declare class StatisticsService {
    private prisma;
    constructor(prisma: PrismaService);
    getDashboardStats(userId: number, startDate?: Date, endDate?: Date): Promise<{
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
    getSalesStats(userId?: number, startDate?: Date, endDate?: Date): Promise<{
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
    exportSalesToExcel(userId?: number, startDate?: Date, endDate?: Date): Promise<Workbook>;
    exportSalesToCsv(userId?: number, startDate?: Date, endDate?: Date): Promise<string>;
}
