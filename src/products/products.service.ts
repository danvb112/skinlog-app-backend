import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.product.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.product.findMany({
      where: { userId },
    });
  }
}
