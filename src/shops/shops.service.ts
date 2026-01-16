import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ShopsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ShopCreateInput, ownerId: number) {
    return this.prisma.shop.create({
      data: {
        name: data.name,
        description: data.description,
        owner: { connect: { id: ownerId } },
      },
    });
  }

  findAll() {
    return this.prisma.shop.findMany();
  }

  findOne(id: number) {
    return this.prisma.shop.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.ShopUpdateInput) {
    return this.prisma.shop.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.shop.delete({ where: { id } });
  }
}
