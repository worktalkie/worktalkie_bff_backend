import { Controller, HttpStatus } from '@nestjs/common';
import { MissionService } from './mission.service';
import { TypedParam, TypedRoute } from '@nestia/core';
import { BaseResponse, MissionType } from '../../global/type';
import { createResponse } from '../../global/util/mapper';

@Controller()
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  /**
   * @summary 시나리오의 미션 조회 API
   * @tag scenario
   * @param scenarioId
   * @return 미션들
   */
  @TypedRoute.Get('/:id/missions')
  async getMissions(
    @TypedParam('id') scenarioId: number,
  ): Promise<BaseResponse<MissionType.MissionDto[]>> {
    const result = await this.missionService.getMissions(scenarioId);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 시나리오의 미션 결과 조회 API
   * @tag scenario
   * @param scenarioId
   * @return 미션 결과 목록
   */
  @TypedRoute.Get('/:id/missions')
  async getMissionsResult(
    @TypedParam('id') scenarioId: string,
  ): Promise<BaseResponse<MissionType.missionResultResponseDto[]>> {
    const result = await this.missionService.getMissionsResult(scenarioId);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 미션 성공 전달 API
   * @tag scenario
   * @param missionId
   */
  @TypedRoute.Patch('/missions/:missionId')
  async clearMission(
    @TypedParam('missionId') missionId: string,
  ): Promise<BaseResponse<object>> {
    await this.missionService.clearMission(missionId);
    return createResponse(HttpStatus.OK);
  }
}
