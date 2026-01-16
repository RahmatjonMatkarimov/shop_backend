import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { DebtsService } from './debts.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('debts')
export class DebtsController {
  constructor(private readonly debtsService: DebtsService) {}

  @Post()
  create(@Body() createDebtDto: any, @Req() req: any) {
    createDebtDto.userId = req.user.userId;
    return this.debtsService.create(createDebtDto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.debtsService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.debtsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDebtDto: Prisma.DebtUpdateInput) {
    return this.debtsService.update(+id, updateDebtDto);
  }

  @Post(':id/pay')
  pay(@Param('id') id: string, @Body('amount') amount: number) {
      return this.debtsService.pay(+id, +amount);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.debtsService.remove(+id);
  }
}
