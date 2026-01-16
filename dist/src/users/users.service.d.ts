import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput & {
        shopName?: string;
    }): Promise<User>;
    findOne(email: string): Promise<User | null>;
    findOneById(id: number): Promise<User | null>;
    findAll(): Promise<{
        id: number;
        email: string;
        name: string | null;
        createdAt: Date;
    }[]>;
    update(id: number, data: Prisma.UserUpdateInput): Promise<User>;
    remove(id: number): Promise<User>;
}
