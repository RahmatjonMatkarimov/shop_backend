import { Controller, Get, Param, Query, UseGuards, Res } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { AuthGuard } from '@nestjs/passport';
import type { Response } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('dashboard')
  getDashboardStats(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.statisticsService.getDashboardStats(
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    );
  }

  @Get('sales')
  getSalesStats(
    @Query('shopId') shopId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.statisticsService.getSalesStats(
      shopId ? +shopId : undefined,
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    );
  }

  @Get('top-selling')
  getTopSelling(@Query('shopId') shopId?: string, @Query('limit') limit?: string) {
      return this.statisticsService.getTopSellingProducts(shopId ? +shopId : undefined, limit ? +limit : 5);
  }

  @Get('categories')
  getCategoryStats(@Query('shopId') shopId?: string) {
      return this.statisticsService.getCategoryStats(shopId ? +shopId : undefined);
  }

  @Get('export')
  async exportSales(
    @Res() res: Response,
    @Query('shopId') shopId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const workbook = await this.statisticsService.exportSalesToExcel(
      shopId ? +shopId : undefined,
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    );

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=sales_report.xlsx',
    );

    await workbook.xlsx.write(res);
    res.end();
  }
}
