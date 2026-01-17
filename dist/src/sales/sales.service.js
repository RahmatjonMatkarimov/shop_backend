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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const statistics_service_1 = require("./statistics.service");
let SalesService = class SalesService {
    constructor(prisma, statisticsService) {
        this.prisma = prisma;
        this.statisticsService = statisticsService;
    }
    async create(data) {
        for (const item of data.items) {
            const product = await this.prisma.product.findUnique({ where: { id: item.productId } });
            if (!product)
                throw new common_1.BadRequestException(`Product ${item.productId} not found`);
            if (product.quantity < item.quantity) {
                throw new common_1.BadRequestException(`"${product.name}" mahsuloti yetarli emas. Omborda: ${product.quantity}, So'raldi: ${item.quantity}`);
            }
        }
        const sale = await this.prisma.sale.create({
            data: {
                totalAmount: data.totalAmount,
                user: { connect: { id: data.userId } },
                items: {
                    create: data.items.map((item) => ({
                        product: { connect: { id: item.productId } },
                        quantity: item.quantity,
                        price: item.price
                    }))
                }
            },
            include: { items: true }
        });
        for (const item of data.items) {
            await this.prisma.product.update({
                where: { id: item.productId },
                data: { quantity: { decrement: item.quantity } }
            });
        }
        return sale;
    }
    async findAll() {
        return this.prisma.sale.findMany({
            include: { user: true, items: true },
            orderBy: { createdAt: 'desc' }
        });
    }
    findOne(id) {
        return this.prisma.sale.findUnique({ where: { id }, include: { user: true, items: { include: { product: true } } } });
    }
    async getDashboardStats() {
        return this.statisticsService.getDashboardStats();
    }
    async getStats(userId) {
        return this.statisticsService.getSalesStats(userId);
    }
    async getTopSellingProducts(userId, limit = 5) {
        return this.statisticsService.getTopSellingProducts(userId, limit);
    }
    async getCategoryStats(userId) {
        return this.statisticsService.getCategoryStats(userId);
    }
    async exportSalesToCsv(userId, startDate, endDate) {
        return this.statisticsService.exportSalesToCsv(userId, startDate, endDate);
    }
    async clearAllSales() {
        await this.prisma.saleItem.deleteMany({});
        await this.prisma.sale.deleteMany({});
        return { message: 'Sales history cleared' };
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        statistics_service_1.StatisticsService])
], SalesService);
//# sourceMappingURL=sales.service.js.map