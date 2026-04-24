import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { uuidv7 } from 'uuidv7';
import { User } from './types.js';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Omit<User, 'id'>) {
    console.log('Creating user with data:', data);

    const userAlreadyExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    console.log('User already exists:', userAlreadyExists);

    if (userAlreadyExists) {
      throw new ConflictException('Email already exists');
    }

    const newUser = {
      ...data,
      id: uuidv7(),
    };

    return this.prisma.user.create({
      data: {
        ...newUser,
      },
    });
  }

  async getUserById(userId: string) {
    console.log('Getting user by ID:', userId);
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }
}
