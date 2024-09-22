import { Controller } from '@nestjs/common';
import { MemberService } from './member.service';
import { TypedRoute } from '@nestia/core';

@Controller('/api/members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @TypedRoute.Post('/')
  async createMember(): Promise<any> {
    return await this.memberService.createMember();
  }

  @TypedRoute.Post('/login')
  async login(): Promise<any> {
    return await this.memberService.login();
  }
}
