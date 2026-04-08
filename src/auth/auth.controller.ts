import { Controller, Req, Res, All } from '@nestjs/common';
import { auth } from '../../auth.js';

@Controller('auth')
export class AuthController {
  @All('*')
  async handleAuth(@Req() req, @Res() res) {
    return auth.handler(req);
  }
}