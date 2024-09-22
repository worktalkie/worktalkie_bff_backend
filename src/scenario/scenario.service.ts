import { PaginationDto } from '../global/type';

export class ScenarioService {
  async getDetailScenario(scenarioId: number): Promise<object> {
    return { scenario: scenarioId };
  }

  async getScenariosByPaging(paginationDto: PaginationDto) {
    return { scenarios: paginationDto };
  }

  async getMissions(scenarioId: number): Promise<object> {
    return { missions: scenarioId };
  }
}
