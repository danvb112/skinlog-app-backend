import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProductsModule } from './products/products.module.js';
import { auth } from '../auth.js';

@Module({
  imports: [PrismaModule, ProductsModule, AuthModule.forRoot({ auth }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
