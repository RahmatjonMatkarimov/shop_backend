import { Controller, Get, Post, Body, Param, UseGuards, Query, Delete, Req } from '@nestjs/common';
import { SalesService } from './sales.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: any, @Req() req: any) {
    createSaleDto.userId = req.user.userId;
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.salesService.findAll(req.user.userId);
  }

  @Get('dashboard-stats')
  getDashboardStats(@Req() req: any) {
      // Assuming getSalesStats can act as dashboard stats if refined, or we update service
      // But actually getDashboardStats in StatisticsService also needs userId now?
      // StatisticsService.getDashboardStats currently doesn't take userId! Need to fix that.
      return this.salesService.getStats(req.user.userId);
  }

  @Get('stats')
  getStats(@Req() req: any) {
      return this.salesService.getStats(req.user.userId);
  }

  @Delete('all')
  clearAllSales() {
    return this.salesService.clearAllSales();
  }
}
