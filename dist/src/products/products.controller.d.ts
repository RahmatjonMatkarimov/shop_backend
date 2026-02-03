import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: any, req: any): Promise<{
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
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
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
    }>;
    findAll(req: any): Prisma.PrismaPromise<({
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
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
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
    })[]>;
    findByBarcode(barcode: string, req: any): Promise<({
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
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
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
    }) | null>;
    findOne(id: string): Prisma.Prisma__ProductClient<({
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
        category: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        } | null;
    } & {
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProductDto: Prisma.ProductUpdateInput): Prisma.Prisma__ProductClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    addStock(id: string, quantity: number): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
