import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { DebtsModule } from './debts/debts.module';
import { AuthModule } from './auth/auth.module';
import { SalesModule } from './sales/sales.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PrismaModule, UsersModule, CategoriesModule, DebtsModule, AuthModule, SalesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
