import { SalesService } from './sales.service';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: any): Promise<{
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
    getStats(shopId?: string): Promise<{
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
    clearAllSales(): Promise<{
        message: string;
    }>;
}
