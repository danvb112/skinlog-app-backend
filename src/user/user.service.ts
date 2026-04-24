import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { User } from './types.js';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(data: Omit<User, 'id'>) {
    console.log('Creating user with data:', data);

    const newUser = {
        ...data,
        id: "1234"
    }

    return this.prisma.user.create({
      data: {
        ...newUser,
      },
    });
  }

  getUserById(userId: string) {
    console.log('Getting user by ID:', userId);
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }
}
