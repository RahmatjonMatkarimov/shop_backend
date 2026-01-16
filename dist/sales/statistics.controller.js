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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsController = void 0;
const common_1 = require("@nestjs/common");
const statistics_service_1 = require("./statistics.service");
const passport_1 = require("@nestjs/passport");
let StatisticsController = class StatisticsController {
    constructor(statisticsService) {
        this.statisticsService = statisticsService;
    }
    getDashboardStats(startDate, endDate) {
        return this.statisticsService.getDashboardStats(startDate ? new Date(startDate) : undefined, endDate ? new Date(endDate) : undefined);
    }
    getSalesStats(shopId, startDate, endDate) {
        return this.statisticsService.getSalesStats(shopId ? +shopId : undefined, startDate ? new Date(startDate) : undefined, endDate ? new Date(endDate) : undefined);
    }
    getTopSelling(shopId, limit) {
        return this.statisticsService.getTopSellingProducts(shopId ? +shopId : undefined, limit ? +limit : 5);
    }
    getCategoryStats(shopId) {
        return this.statisticsService.getCategoryStats(shopId ? +shopId : undefined);
    }
    async exportSales(res, shopId, startDate, endDate) {
        const workbook = await this.statisticsService.exportSalesToExcel(shopId ? +shopId : undefined, startDate ? new Date(startDate) : undefined, endDate ? new Date(endDate) : undefined);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=sales_report.xlsx');
        await workbook.xlsx.write(res);
        res.end();
    }
};
exports.StatisticsController = StatisticsController;
__decorate([
    (0, common_1.Get)('dashboard'),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StatisticsController.prototype, "getDashboardStats", null);
__decorate([
    (0, common_1.Get)('sales'),
    __param(0, (0, common_1.Query)('shopId')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], StatisticsController.prototype, "getSalesStats", null);
__decorate([
    (0, common_1.Get)('top-selling'),
    __param(0, (0, common_1.Query)('shopId')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StatisticsController.prototype, "getTopSelling", null);
__decorate([
    (0, common_1.Get)('categories'),
    __param(0, (0, common_1.Query)('shopId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StatisticsController.prototype, "getCategoryStats", null);
__decorate([
    (0, common_1.Get)('export'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('shopId')),
    __param(2, (0, common_1.Query)('startDate')),
    __param(3, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], StatisticsController.prototype, "exportSales", null);
exports.StatisticsController = StatisticsController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('statistics'),
    __metadata("design:paramtypes", [statistics_service_1.StatisticsService])
], StatisticsController);
//# sourceMappingURL=statistics.controller.js.map