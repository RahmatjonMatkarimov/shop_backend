import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.category.create({
        data: {
            name: data.name,
            user: { connect: { id: data.userId } }
        }
    });
  }

  findAll(userId: number) {
    return this.prisma.category.findMany({ 
      where: { userId },
      include: { 
        user: true,
        _count: {
          select: { products: true }
        }
      } 
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id }, include: { user: true, products: true } });
  }

  update(id: number, data: Prisma.CategoryUpdateInput) {
    return this.prisma.category.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
