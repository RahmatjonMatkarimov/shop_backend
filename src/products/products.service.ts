import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const barcode = data.barcode?.trim();
    const name = data.name?.trim();

    // Check if product exists by barcode OR name (for the same user)
    const existingProduct = await this.prisma.product.findFirst({
      where: {
        userId: data.userId,
        OR: [
          { barcode: barcode ? barcode : undefined },
          { name: { equals: name, mode: 'insensitive' } } // Case insensitive name match
        ]
      }
    });

    if (existingProduct) {
      // If product exists, just update the quantity (add new quantity to existing)
      // Also update the price and costPrice to the latest values
      return this.prisma.product.update({
        where: { id: existingProduct.id },
        data: {
          quantity: { increment: data.quantity },
          price: data.price,
          costPrice: data.costPrice
        },
        include: { category: true, user: true }
      });
    }

    // If not found, create new product
    return this.prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        costPrice: data.costPrice,
        quantity: data.quantity,
        barcode: data.barcode,
        boxBarcode: data.boxBarcode,
        itemsPerBox: data.itemsPerBox,
        unit: data.unit, 
        user: { connect: { id: data.userId } },
        category: data.categoryId ? { connect: { id: data.categoryId } } : undefined,
      },
      include: { category: true, user: true }
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
          include: { category: true, user: true }
      });
  }

  findAll(userId: number) {
    return this.prisma.product.findMany({ 
        where: { userId },
        include: { user: true, category: true } 
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id }, include: { user: true, category: true } });
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
