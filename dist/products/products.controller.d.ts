import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: Prisma.ProductCreateInput): Promise<{
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
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
    }>;
    findAll(): Prisma.PrismaPromise<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
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
    })[]>;
    findByBarcode(barcode: string): Promise<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
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
    }) | null>;
    findOne(id: string): Prisma.Prisma__ProductClient<({
        shop: {
            id: number;
            name: string;
            description: string | null;
            ownerId: number;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            shopId: number;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProductDto: Prisma.ProductUpdateInput): Prisma.Prisma__ProductClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    addStock(id: string, quantity: number): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
