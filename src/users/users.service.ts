import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput & { shopName?: string }): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const role = data.role || 'USER';
    
    // User IS the shop
    return this.prisma.user.create({ 
      data: {
        ...data,
        password: hashedPassword,
        shopName: data.shopName || `${data.name}'s Shop`
      } 
    });
  }

  async findOne(email: string): Promise<User | null> {
    if (!email) return null;
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
  
  async findOneById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      }
    });
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

}
