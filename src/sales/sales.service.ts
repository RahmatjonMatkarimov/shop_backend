import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StatisticsService } from './statistics.service';

@Injectable()
export class SalesService {
  constructor(
      private prisma: PrismaService,
      private statisticsService: StatisticsService
  ) {}

  async create(data: any) {
    // 1. Validate Product Existence
    for (const item of data.items) {
        const product = await this.prisma.product.findUnique({ where: { id: item.productId } });
        if (!product) throw new BadRequestException(`Product ${item.productId} not found`);
        if (product.quantity < item.quantity) {
             throw new BadRequestException(`"${product.name}" mahsuloti yetarli emas. Omborda: ${product.quantity}, So'raldi: ${item.quantity}`);
        }
    }

    // 2. Create Sale and SaleItems
    const sale = await this.prisma.sale.create({
      data: {
        totalAmount: data.totalAmount,
        user: { connect: { id: data.userId } },
        items: {
          create: data.items.map((item: any) => ({
             product: { connect: { id: item.productId } },
             quantity: item.quantity,
             price: item.price
          }))
        }
      },
      include: { items: true }
    });

    // 3. Decrease Stock
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
  
  findOne(id: number) {
    return this.prisma.sale.findUnique({ where: { id }, include: { user: true, items: { include: { product: true } } } });
  }

  async getDashboardStats() {
      return this.statisticsService.getDashboardStats();
  }

   async getStats(userId?: number) {
      return this.statisticsService.getSalesStats(userId);
  }

  async getTopSellingProducts(userId?: number, limit = 5) {
      return this.statisticsService.getTopSellingProducts(userId, limit);
  }

  async getCategoryStats(userId?: number) {
      return this.statisticsService.getCategoryStats(userId);
  }

  async exportSalesToCsv(userId?: number, startDate?: Date, endDate?: Date) {
      return this.statisticsService.exportSalesToCsv(userId, startDate, endDate);
  }

  async clearAllSales() {
    await this.prisma.saleItem.deleteMany({});
    await this.prisma.sale.deleteMany({});
    return { message: 'Sales history cleared' };
  }
}
