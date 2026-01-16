import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ShopsModule } from './shops/shops.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { DebtsModule } from './debts/debts.module';
import { AuthModule } from './auth/auth.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [PrismaModule, UsersModule, ShopsModule, CategoriesModule, ProductsModule, DebtsModule, AuthModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
