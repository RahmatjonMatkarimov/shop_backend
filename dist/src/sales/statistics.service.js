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
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const exceljs_1 = require("exceljs");
let StatisticsService = class StatisticsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboardStats(startDate, endDate) {
        const whereClause = {};
        if (startDate || endDate) {
            whereClause.createdAt = {
                ...(startDate ? { gte: startDate } : {}),
                ...(endDate ? { lte: endDate } : {}),
            };
        }
        const totalSalesCount = await this.prisma.sale.count({ where: whereClause });
        const totalRevenue = await this.prisma.sale.aggregate({
            where: whereClause,
            _sum: { totalAmount: true }
        });
        const totalProducts = await this.prisma.product.count({ where: whereClause });
        const totalDebts = await this.prisma.debt.aggregate({
            where: { ...whereClause, isPaid: false },
            _sum: { amount: true }
        });
        const recentSales = await this.prisma.sale.findMany({
            where: whereClause,
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { user: true }
        });
        const allSales = await this.prisma.sale.findMany({
            where: whereClause,
            include: { items: { include: { product: true } } }
        });
        let totalExpense = 0;
        let totalProfit = 0;
        allSales.forEach(sale => {
            sale.items.forEach(item => {
                const cost = (item.product.costPrice || 0) * item.quantity;
                totalExpense += cost;
                totalProfit += (item.price * item.quantity) - cost;
            });
        });
        return {
            totalSales: totalSalesCount,
            totalRevenue: totalRevenue._sum?.totalAmount || 0,
            totalExpense,
            totalProfit,
            totalProducts,
            totalDebts: totalDebts._sum?.amount || 0,
            recentSales
        };
    }
    async getSalesStats(userId, startDate, endDate) {
        const start = startDate || new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const end = endDate || new Date();
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const stats = [];
        if (diffDays <= 31) {
            for (let d = 0; d <= diffDays; d++) {
                const currentDayStart = new Date(start);
                currentDayStart.setDate(start.getDate() + d);
                currentDayStart.setHours(0, 0, 0, 0);
                const currentDayEnd = new Date(currentDayStart);
                currentDayEnd.setHours(23, 59, 59, 999);
                const [sales, productsCount, debtsCount] = await Promise.all([
                    this.prisma.sale.findMany({
                        where: {
                            createdAt: { gte: currentDayStart, lte: currentDayEnd },
                            ...(userId ? { userId } : {})
                        },
                        include: { items: { include: { product: true } } }
                    }),
                    this.prisma.product.count({
                        where: {
                            createdAt: { gte: currentDayStart, lte: currentDayEnd },
                            ...(userId ? { userId } : {})
                        }
                    }),
                    this.prisma.debt.count({
                        where: {
                            createdAt: { gte: currentDayStart, lte: currentDayEnd },
                            ...(userId ? { userId } : {})
                        }
                    })
                ]);
                let revenue = 0;
                let profit = 0;
                let expense = 0;
                sales.forEach(sale => {
                    revenue += sale.totalAmount;
                    sale.items.forEach(item => {
                        const cost = (item.product.costPrice || 0) * item.quantity;
                        expense += cost;
                        profit += (item.price * item.quantity) - cost;
                    });
                });
                stats.push({
                    label: currentDayStart.getDate().toString(),
                    revenue,
                    profit,
                    expense,
                    products: productsCount,
                    debts: debtsCount
                });
            }
        }
        else {
            const startMonth = start.getMonth();
            const startYear = start.getFullYear();
            const endMonth = end.getMonth();
            const endYear = end.getFullYear();
            const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
            for (let i = 0; i <= totalMonths; i++) {
                const currentMonthStart = new Date(startYear, startMonth + i, 1);
                const currentMonthEnd = new Date(startYear, startMonth + i + 1, 0, 23, 59, 59);
                const [sales, productsCount, debtsCount] = await Promise.all([
                    this.prisma.sale.findMany({
                        where: {
                            createdAt: { gte: currentMonthStart, lte: currentMonthEnd },
                            ...(userId ? { userId } : {})
                        },
                        include: { items: { include: { product: true } } }
                    }),
                    this.prisma.product.count({
                        where: {
                            createdAt: { gte: currentMonthStart, lte: currentMonthEnd },
                            ...(userId ? { userId } : {})
                        }
                    }),
                    this.prisma.debt.count({
                        where: {
                            createdAt: { gte: currentMonthStart, lte: currentMonthEnd },
                            ...(userId ? { userId } : {})
                        }
                    })
                ]);
                let totalRevenue = 0;
                let totalProfit = 0;
                let totalCost = 0;
                sales.forEach(sale => {
                    totalRevenue += sale.totalAmount;
                    sale.items.forEach(item => {
                        const cost = (item.product.costPrice || 0) * item.quantity;
                        totalCost += cost;
                        totalProfit += (item.price * item.quantity) - cost;
                    });
                });
                stats.push({
                    label: currentMonthStart.toLocaleString('default', { month: 'short' }),
                    revenue: totalRevenue,
                    profit: totalProfit,
                    expense: totalCost,
                    products: productsCount,
                    debts: debtsCount
                });
            }
        }
        return {
            stats,
            todayRevenue: 0,
            todayCount: 0
        };
    }
    async getTopSellingProducts(userId, limit = 5) {
        const where = {};
        if (userId)
            where.sale = { userId };
        const topItems = await this.prisma.saleItem.groupBy({
            by: ['productId'],
            where,
            _sum: { quantity: true },
            orderBy: { _sum: { quantity: 'desc' } },
            take: limit,
        });
        const products = await Promise.all(topItems.map(async (item) => {
            const product = await this.prisma.product.findUnique({
                where: { id: item.productId },
                include: { category: true }
            });
            return {
                ...product,
                soldQuantity: item._sum.quantity,
            };
        }));
        return products;
    }
    async getCategoryStats(userId) {
        const categories = await this.prisma.category.findMany({
            where: userId ? { userId } : {},
            include: {
                products: {
                    select: { quantity: true }
                }
            }
        });
        return categories.map(cat => ({
            id: cat.id,
            name: cat.name,
            productCount: cat.products.reduce((sum, product) => sum + product.quantity, 0)
        }));
    }
    async exportSalesToExcel(userId, startDate, endDate) {
        const whereClause = {};
        if (userId)
            whereClause.userId = userId;
        if (startDate || endDate) {
            whereClause.createdAt = {
                ...(startDate ? { gte: startDate } : {}),
                ...(endDate ? { lte: endDate } : {}),
            };
        }
        const sales = await this.prisma.sale.findMany({
            where: whereClause,
            include: {
                items: { include: { product: true } },
                user: true
            },
            orderBy: { createdAt: 'desc' }
        });
        const workbook = new exceljs_1.Workbook();
        const worksheet = workbook.addWorksheet('Savdolar');
        worksheet.columns = [
            { header: 'ID', key: 'id', width: 10 },
            { header: 'Sana', key: 'date', width: 20 },
            { header: 'Do\'kon', key: 'shop', width: 20 },
            { header: 'Mahsulotlar', key: 'items', width: 50 },
            { header: 'Jami Summa', key: 'total', width: 15 },
        ];
        sales.forEach(sale => {
            const items = sale.items.map(item => `${item.product.name} (${item.quantity} ta)`).join(', ');
            worksheet.addRow({
                id: sale.id,
                date: sale.createdAt.toLocaleString('uz-UZ'),
                shop: sale.user.shopName || sale.user.name,
                items: items,
                total: sale.totalAmount
            });
        });
        worksheet.getRow(1).font = { bold: true };
        worksheet.getRow(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFE0E0E0' }
        };
        return workbook;
    }
    async exportSalesToCsv(userId, startDate, endDate) {
        const whereClause = {};
        if (userId)
            whereClause.userId = userId;
        if (startDate || endDate) {
            whereClause.createdAt = {
                ...(startDate ? { gte: startDate } : {}),
                ...(endDate ? { lte: endDate } : {}),
            };
        }
        const sales = await this.prisma.sale.findMany({
            where: whereClause,
            include: {
                items: { include: { product: true } },
                user: true
            },
            orderBy: { createdAt: 'desc' }
        });
        let csv = 'ID,Sana,Do\'kon,Masulotlar,Jami Summa\n';
        sales.forEach(sale => {
            const items = sale.items.map(item => `${item.product.name} (${item.quantity} ta)`).join('; ');
            const date = sale.createdAt.toISOString().split('T')[0];
            csv += `${sale.id},${date},${sale.user.shopName || sale.user.name},\"${items}\",${sale.totalAmount}\\n`;
        });
        return csv;
    }
};
exports.StatisticsService = StatisticsService;
exports.StatisticsService = StatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatisticsService);
//# sourceMappingURL=statistics.service.js.map