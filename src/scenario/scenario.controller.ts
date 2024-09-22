import { Controller } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { TypedParam, TypedQuery, TypedRoute } from '@nestia/core';
import { PaginationDto } from '../global/type';

@Controller('/scenarios')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @TypedRoute.Get('/:id')
  async getDetailScenario(
    @TypedParam('id') scenarioId: number,
  ): Promise<object> {
    return await this.scenarioService.getDetailScenario(scenarioId);
  }

  @TypedRoute.Get('')
  async getScenariosByPaging(
    @TypedQuery() paginationDto: PaginationDto,
  ): Promise<object> {
    return await this.scenarioService.getScenariosByPaging(paginationDto);
  }

  @TypedRoute.Get('/:id/missions')
  async getMissions(@TypedParam('id') scenarioId: number): Promise<object> {
    return await this.scenarioService.getMissions(scenarioId);
  }
}
