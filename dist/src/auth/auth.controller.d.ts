import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        access_token: string;
        user: any;
    }>;
    register(body: any): Promise<{
        id: number;
        email: string;
        password: string;
        name: string | null;
        shopName: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProfile(req: any): any;
    refresh(req: any): Promise<{
        access_token: string;
    }>;
}
