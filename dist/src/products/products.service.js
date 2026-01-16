"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const barcode = data.barcode?.trim();
        if (barcode) {
            const existingProduct = await this.prisma.product.findFirst({
                where: { barcode: barcode }
            });
            if (existingProduct) {
                throw new common_1.ConflictException(`Product with barcode ${barcode} already exists`);
            }
        }
        return this.prisma.product.create({
            data: {
                name: data.name,
                price: data.price,
                costPrice: data.costPrice,
                quantity: data.quantity,
                barcode: data.barcode,
                boxBarcode: data.boxBarcode,
                itemsPerBox: data.itemsPerBox,
                user: { connect: { id: data.userId } },
                category: data.categoryId ? { connect: { id: data.categoryId } } : undefined,
            },
            include: { category: true, user: true }
        });
    }
    async addStock(id, quantity) {
        return this.prisma.product.update({
            where: { id },
            data: { quantity: { increment: quantity } }
        });
    }
    async findByBarcode(barcode) {
        return this.prisma.product.findFirst({
            where: {
                OR: [
                    { barcode: barcode },
                    { boxBarcode: barcode }
                ]
            },
            include: { category: true, user: true }
        });
    }
    findAll(userId) {
        return this.prisma.product.findMany({
            where: { userId },
            include: { user: true, category: true }
        });
    }
    findOne(id) {
        return this.prisma.product.findUnique({ where: { id }, include: { user: true, category: true } });
    }
    update(id, data) {
        return this.prisma.product.update({ where: { id }, data });
    }
    async remove(id) {
        const saleItemsCount = await this.prisma.saleItem.count({
            where: { productId: id }
        });
        if (saleItemsCount > 0) {
            throw new common_1.ConflictException('Bu mahsulot sotilgan (savdo tarixida mavjud), uni o\'chirib bo\'lmaydi. Arxivlash tavsiya etiladi.');
        }
        return this.prisma.product.delete({ where: { id } });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map