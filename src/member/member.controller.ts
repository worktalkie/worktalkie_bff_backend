import { Controller, HttpCode, HttpStatus } from '@nestjs/common';
import { MemberService } from './member.service';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { BaseResponse, MemberType } from '../global/type';
import { createResponse } from '../global/util/mapper';

@Controller('/api/members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @TypedRoute.Post('/')
  async createMember(
    @TypedBody() input: MemberType.CreateRequestDto,
  ): Promise<BaseResponse<MemberType.MemberDto>> {
    const result = await this.memberService.createMember(input);
    return createResponse(HttpStatus.CREATED, result);
  }

  @TypedRoute.Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(
    @TypedBody() input: MemberType.LoginRequestDto,
  ): Promise<BaseResponse<MemberType.MemberDto>> {
    const result = await this.memberService.login(input);
    return createResponse(HttpStatus.OK, result);
  }

  @TypedRoute.Get('/:id/proficiencies')
  async getProficiencies(
    @TypedParam('id') memberId: string,
  ): Promise<BaseResponse<MemberType.ProficiencyDto>> {
    const result = await this.memberService.getProficiencies(memberId);
    return createResponse(HttpStatus.OK, result);
  }
}
