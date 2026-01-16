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
    }

    // 2. Create Sale and SaleItems
    const sale = await this.prisma.sale.create({
      data: {
        totalAmount: data.totalAmount,
        shop: { connect: { id: data.shopId } },
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
      include: {
        items: {
          include: {
            product: true
          }
        },
        shop: true
      },
      orderBy: { createdAt: 'desc' }
    });
  }
  
  async getDashboardStats() {
      return this.statisticsService.getDashboardStats();
  }

   async getStats(shopId?: number) {
      return this.statisticsService.getSalesStats(shopId);
  }

  async getTopSellingProducts(shopId?: number, limit = 5) {
      return this.statisticsService.getTopSellingProducts(shopId, limit);
  }

  async getCategoryStats(shopId?: number) {
      return this.statisticsService.getCategoryStats(shopId);
  }

  async exportSalesToCsv(shopId?: number, startDate?: Date, endDate?: Date) {
      return this.statisticsService.exportSalesToCsv(shopId, startDate, endDate);
  }

  async clearAllSales() {
    await this.prisma.saleItem.deleteMany({});
    await this.prisma.sale.deleteMany({});
    return { message: 'Sales history cleared' };
  }
}
