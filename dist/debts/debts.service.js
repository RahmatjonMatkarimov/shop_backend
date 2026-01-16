"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebtsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DebtsService = class DebtsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.debt.create({ data });
    }
    findAll() {
        return this.prisma.debt.findMany({ include: { shop: true } });
    }
    findOne(id) {
        return this.prisma.debt.findUnique({ where: { id }, include: { shop: true } });
    }
    update(id, data) {
        return this.prisma.debt.update({ where: { id }, data });
    }
    async pay(id, amount) {
        const debt = await this.prisma.debt.findUnique({ where: { id } });
        if (!debt)
            throw new Error('Debt not found');
        const newAmount = debt.amount - amount;
        const isPaid = newAmount <= 0;
        return this.prisma.debt.update({
            where: { id },
            data: {
                amount: isPaid ? 0 : newAmount,
                isPaid: isPaid
            }
        });
    }
    remove(id) {
        return this.prisma.debt.delete({ where: { id } });
    }
};
exports.DebtsService = DebtsService;
exports.DebtsService = DebtsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DebtsService);
//# sourceMappingURL=debts.service.js.map