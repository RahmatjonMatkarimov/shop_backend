import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: any, @Req() req: any) {
    createProductDto.userId = req.user.userId;
    return await this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.productsService.findAll(req.user.userId);
  }

  @Get('barcode/:barcode')
  findByBarcode(@Param('barcode') barcode: string, @Req() req: any) {
      return this.productsService.findByBarcode(barcode, req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Prisma.ProductUpdateInput) {
    return this.productsService.update(+id, updateProductDto);
  }
  
  @Patch(':id/stock')
  addStock(@Param('id') id: string, @Body('quantity') quantity: number) {
      return this.productsService.addStock(+id, +quantity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
