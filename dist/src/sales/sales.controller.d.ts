import { SalesService } from './sales.service';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: any, req: any): Promise<{
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
        items: ({
            product: {
                id: number;
                name: string;
                price: number;
                costPrice: number | null;
                quantity: number;
                unit: string;
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
    })[]>;
    getDashboardStats(req: any): Promise<{
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
    getStats(userId?: string): Promise<{
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
