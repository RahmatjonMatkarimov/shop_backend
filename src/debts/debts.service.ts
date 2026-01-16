import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DebtsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.DebtCreateInput) {
    return this.prisma.debt.create({ data });
  }

  findAll() {
    return this.prisma.debt.findMany({ include: { shop: true } });
  }

  findOne(id: number) {
    return this.prisma.debt.findUnique({ where: { id }, include: { shop: true } });
  }

  update(id: number, data: Prisma.DebtUpdateInput) {
    return this.prisma.debt.update({ where: { id }, data });
  }

  async pay(id: number, amount: number) {
      const debt = await this.prisma.debt.findUnique({ where: { id } });
      if (!debt) throw new Error('Debt not found');

      const newAmount = debt.amount - amount;
      const isPaid = newAmount <= 0;

      return this.prisma.debt.update({
          where: { id },
          data: {
              amount: isPaid ? 0 : newAmount,
              isPaid: isPaid
          }
      });
  }

  remove(id: number) {
    return this.prisma.debt.delete({ where: { id } });
  }
}
