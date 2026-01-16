import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { StatisticsController } from './statistics.controller';
import { PrismaService } from '../prisma/prisma.service';
import { StatisticsService } from './statistics.service';

@Module({
  controllers: [SalesController, StatisticsController],
  providers: [SalesService, PrismaService, StatisticsService],
})
export class SalesModule {}
