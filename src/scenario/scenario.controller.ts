import { Controller, HttpStatus } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { TypedParam, TypedQuery, TypedRoute } from '@nestia/core';
import { BaseResponse, PaginationDto, ScenarioType } from '../global/type';
import { createResponse } from '../global/util/mapper';

@Controller('/api/scenarios')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  /**
   * @summary 시나리오 페이징 조회 API
   * @tag scenario
   * @param paginationDto
   * @return 페이징 시나리오
   */
  @TypedRoute.Get('')
  async getScenariosByPaging(
    @TypedQuery() paginationDto: PaginationDto,
  ): Promise<BaseResponse<ScenarioType.ScenarioPagingDto>> {
    const result =
      await this.scenarioService.getScenariosByPaging(paginationDto);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 시나리오 상세 조회 API
   * @tag scenario
   * @param scenarioId
   * @return 상세 시나리오 정보
   */
  @TypedRoute.Get('/:id')
  async getDetailScenario(
    @TypedParam('id') scenarioId: number,
  ): Promise<BaseResponse<ScenarioType.DetailScenarioDto>> {
    const result = await this.scenarioService.getDetailScenario(scenarioId);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 카테고리 입력에 따른 시나리오 조회 API
   * @tag scenario
   * @param category
   * @return ScenarioType.ScenarioPagingDto[]
   */
  @TypedRoute.Get(':category')
  async getConversationsByCategory(
    @TypedParam('category') category: string,
  ): Promise<BaseResponse<ScenarioType.ScenarioPagingDto>> {
    const conversations =
      await this.scenarioService.getScenariosByCategory(category);
    return createResponse(HttpStatus.OK, conversations);
  }

  /**
   * @summary 카테고리 조회 API
   * @tag scenario
   * @return 카테고리 목록
   */
  @TypedRoute.Get('/categories')
  async getCategories(): Promise<BaseResponse<string[]>> {
    const categories = await this.scenarioService.getCategories();
    return createResponse(HttpStatus.OK, categories);
  }
}
