import { SalesService } from './sales.service';
export declare class SalesController {
    private readonly salesService;
    constructor(salesService: SalesService);
    create(createSaleDto: any, req: any): Promise<{
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
    findAll(req: any): Promise<({
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
    getStats(req: any): Promise<{
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
