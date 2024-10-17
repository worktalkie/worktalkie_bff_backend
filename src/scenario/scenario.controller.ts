import { Controller, HttpStatus, Logger } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { TypedParam, TypedQuery, TypedRoute } from '@nestia/core';
import {
  BaseResponse,
  PaginationDto,
  ScenarioType,
  IdType,
} from '../global/type';
import { createResponse } from '../global/util/mapper';

@Controller('/api/scenarios')
export class ScenarioController {
  private readonly logger = new Logger(ScenarioController.name);
  constructor(private readonly scenarioService: ScenarioService) {}

  /**
   * @summary 카테고리 입력에 따른 시나리오 조회 API
   * @tag scenario
   * @query categoryId
   * @return ScenarioType.ScenarioPagingDto[]
   */
  @TypedRoute.Get('')
  async getConversationsByCategoryId(
    @TypedQuery() category: IdType,
  ): Promise<BaseResponse<ScenarioType.ScenarioPagingDto>> {
    const conversations = await this.scenarioService.getScenariosByCategoryId(
      category.id,
    );
    return createResponse(HttpStatus.OK, conversations);
  }

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
   * @return ScenarioType.DetailScenarioDto
   */
  @TypedRoute.Get('/:id')
  async getDetailScenario(
    @TypedParam('id') scenarioId: string,
  ): Promise<BaseResponse<ScenarioType.DetailScenarioDto>> {
    const result = await this.scenarioService.getDetailScenario(scenarioId);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 카테고리 조회 API
   * @tag scenario
   * @return ScenarioType.CategoryDto[]
   */
  @TypedRoute.Get('/categories')
  async getCategories(): Promise<BaseResponse<ScenarioType.CategoryDto[]>> {
    const categories = await this.scenarioService.getCategories();
    return createResponse(HttpStatus.OK, categories);
  }
}
