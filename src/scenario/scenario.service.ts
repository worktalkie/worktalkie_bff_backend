import { ListType, PaginationDto, ScenarioType } from '../global/type';

export class ScenarioService {
  async getScenariosByPaging(paginationDto: PaginationDto): Promise<ListType> {
    return {
      count: 2,
      data: [{ scenarios: paginationDto }, { scenarios: paginationDto }],
    };
  }

  async getDetailScenario(
    scenarioId: number,
  ): Promise<ScenarioType.DetailScenarioDto> {
    console.log(scenarioId);

    return {
      title: '아몰랑',
      contents: '아몰라라라라라랄',
      missions: [{ title: '미션1' }, { title: '미션2' }, { title: '미션3' }],
      tips: [{ title: '응 아니야' }, { title: '응 그런거 없어' }],
    };
  }
}
