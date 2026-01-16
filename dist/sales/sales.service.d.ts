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
        shopId: number;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
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
                shopId: number;
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
        shopId: number;
        createdAt: Date;
    })[]>;
    getDashboardStats(): Promise<{
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
    getStats(shopId?: number): Promise<{
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
    exportSalesToCsv(shopId?: number, startDate?: Date, endDate?: Date): Promise<string>;
    clearAllSales(): Promise<{
        message: string;
    }>;
}
