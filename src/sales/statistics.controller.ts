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
    @Query('userId') userId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.statisticsService.getSalesStats(
      userId ? +userId : undefined,
      startDate ? new Date(startDate) : undefined,
      endDate ? new Date(endDate) : undefined,
    );
  }

  @Get('top-selling')
  getTopSelling(@Query('userId') userId?: string, @Query('limit') limit?: string) {
      return this.statisticsService.getTopSellingProducts(userId ? +userId : undefined, limit ? +limit : 5);
  }

  @Get('categories')
  getCategoryStats(@Query('userId') userId?: string) {
      return this.statisticsService.getCategoryStats(userId ? +userId : undefined);
  }

  @Get('export')
  async exportSales(
    @Res() res: Response,
    @Query('userId') userId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const workbook = await this.statisticsService.exportSalesToExcel(
      userId ? +userId : undefined,
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
