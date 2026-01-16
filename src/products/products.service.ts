import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const barcode = data.barcode?.trim();
    if (barcode) {
      const existingProduct = await this.prisma.product.findFirst({
        where: { barcode: barcode }
      });
      if (existingProduct) {
        throw new ConflictException(`Product with barcode ${barcode} already exists`);
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
        shop: { connect: { id: data.shopId } },
        category: data.categoryId ? { connect: { id: data.categoryId } } : undefined,
      },
      include: { category: true, shop: true }
    });
  }

  async addStock(id: number, quantity: number) {
     return this.prisma.product.update({
         where: { id },
         data: { quantity: { increment: quantity } }
     });
  }
  
  async findByBarcode(barcode: string) {
      return this.prisma.product.findFirst({
          where: {
              OR: [
                  { barcode: barcode },
                  { boxBarcode: barcode }
              ]
          },
          include: { category: true, shop: true }
      });
  }

  findAll() {
    return this.prisma.product.findMany({ include: { shop: true, category: true } });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id }, include: { shop: true, category: true } });
  }

  update(id: number, data: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async remove(id: number) {
    const saleItemsCount = await this.prisma.saleItem.count({
      where: { productId: id }
    });

    if (saleItemsCount > 0) {
      throw new ConflictException('Bu mahsulot sotilgan (savdo tarixida mavjud), uni o\'chirib bo\'lmaydi. Arxivlash tavsiya etiladi.');
    }

    return this.prisma.product.delete({ where: { id } });
  }
}
