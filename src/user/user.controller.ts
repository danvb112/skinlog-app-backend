import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  create(@Req() req, @Body() body) {
    console.log('Request POST User ID:', req);
    return this.service.create(body);
  }

  @Get("/:id")
  getUserById(@Req() req, @Body() body) {
    return this.service.getUserById(req.params.id);
  }
}
