import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: any): Promise<{
        id: number;
        email: string;
        password: string;
        name: string | null;
        shopName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        email: string;
        name: string | null;
        createdAt: Date;
    }[]>;
    getProfile(req: any): Promise<{
        id: number;
        email: string;
        password: string;
        name: string | null;
        shopName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findOne(id: string): Promise<{
        id: number;
        email: string;
        password: string;
        name: string | null;
        shopName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        password: string;
        name: string | null;
        shopName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        email: string;
        password: string;
        name: string | null;
        shopName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
