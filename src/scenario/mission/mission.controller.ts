import { Controller, HttpStatus } from '@nestjs/common';
import { MissionService } from './mission.service';
import { TypedParam, TypedQuery, TypedRoute } from '@nestia/core';
import { BaseResponse, MissionType, ScenarioType } from '../../global/type';
import { createResponse } from '../../global/util/mapper';

@Controller('/api/missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  /**
   * @summary 시나리오의 미션 조회 API
   * @tag scenario
   * @param scenarioIdDto
   * @return 미션들
   */
  @TypedRoute.Get('/')
  async getMissions(
    @TypedQuery() scenarioIdDto: ScenarioType.ScenarioIdDto,
  ): Promise<BaseResponse<MissionType.MissionDto[]>> {
    const result = await this.missionService.getMissions(
      scenarioIdDto.scenarioId,
    );
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 시나리오의 미션 결과 조회 API
   * @tag scenario
   * @param scenarioIdDto
   * @return 미션 결과 목록
   */
  @TypedRoute.Get('/results')
  async getMissionsResult(
    @TypedQuery() scenarioIdDto: ScenarioType.ScenarioIdDto,
  ): Promise<BaseResponse<MissionType.missionResultResponseDto[]>> {
    const result = await this.missionService.getMissionsResult(
      scenarioIdDto.scenarioId,
    );
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 미션 성공 전달 API
   * @tag scenario
   * @param missionId
   */
  @TypedRoute.Patch('/:missionId')
  async clearMission(
    @TypedParam('missionId') missionId: string,
  ): Promise<BaseResponse<object>> {
    await this.missionService.clearMission(missionId);
    return createResponse(HttpStatus.OK);
  }
}
