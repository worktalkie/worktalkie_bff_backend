import { Controller, HttpCode, HttpStatus } from '@nestjs/common';
import { MemberService } from './member.service';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { BaseResponse, MemberType } from '../global/type';
import { createResponse } from '../global/util/mapper';

@Controller('/api/members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  /**
   * @summary 멤버 생성 API
   * @tag member
   * @param input
   * @returns 멤버 기본정보
   */
  @TypedRoute.Post('/')
  async createMember(
    @TypedBody() input: MemberType.CreateRequestDto,
  ): Promise<BaseResponse<MemberType.MemberDto>> {
    const result = await this.memberService.createMember(input);
    return createResponse(HttpStatus.CREATED, result);
  }

  /**
   * @summary 로그인 API
   * @tag member
   * @param input
   * @return 멤버 기본정보
   */
  @TypedRoute.Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(
    @TypedBody() input: MemberType.LoginRequestDto,
  ): Promise<BaseResponse<MemberType.MemberDto>> {
    const result = await this.memberService.login(input);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 멤버 성숙도 조회 API
   * @tag member
   * @param memberId
   * @return 멤버 성숙도 관련데이터
   */
  @TypedRoute.Get('/:id/proficiencies')
  async getProficiencies(
    @TypedParam('id') memberId: string,
  ): Promise<BaseResponse<MemberType.ProficiencyDto>> {
    const result = await this.memberService.getProficiencies(memberId);
    return createResponse(HttpStatus.OK, result);
  }
}
