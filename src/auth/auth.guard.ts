import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { auth } from '../../auth.js';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const session = await auth.api.getSession();

    if (!session) {
      return false;
    };

    req.user = session.user;
    return true;
  }
}