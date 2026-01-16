import { Controller, Get, Post, Body, Param, UseGuards, Query, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: any) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get('dashboard-stats')
  getDashboardStats() {
      return this.salesService.getDashboardStats();
  }

  @Get('stats')
  getStats(@Query('shopId') shopId?: string) {
      return this.salesService.getStats(shopId ? +shopId : undefined);
  }

  @Delete('all')
  clearAllSales() {
    return this.salesService.clearAllSales();
  }
}
