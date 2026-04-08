import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Post()
  create(@Req() req, @Body() body) {
    return this.service.create(req.user.id, body);
  }

  @Get()
  findAll(@Req() req) {
    return this.service.findAll(req.user.id);
  }
}
