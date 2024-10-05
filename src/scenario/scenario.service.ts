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

  async getScenariosByCategory(
    category: string,
  ): Promise<ScenarioType.ScenarioPagingDto> {
    // TODO: category 입력으로 조회. category 입력 유효성 검사
    console.log(category);

    return {
      count: 5,
      data: [
        {
          id: '1',
          title: '외부에서 온 전화 대응하기',
          category: '비즈니스 통화하기',
          eta: 4,
        },
        {
          id: '2',
          title: '외부에서 온 전화 대응하기2',
          category: '비즈니스 통화하기',
          eta: 5,
        },
        {
          id: '3',
          title: '다른 부서에서 온 전화 대응하기1',
          category: '비즈니스 통화하기',
          eta: 4,
        },
        {
          id: '4',
          title: '다른 부서에서 온 전화 대응하기2',
          category: '비즈니스 통화하기',
          eta: 3,
        },
        {
          id: '5',
          title: '명함 발주넣기',
          category: '비즈니스 통화하기',
          eta: 5,
        },
      ],
    };
  }

  async getCategories(): Promise<string[]> {
    return [
      '비즈니스 통화하기',
      '회사 내 스몰토크하기',
      '연차 사용 및 병가 문의하기',
      '업무상황 보고하기',
      '타 부서와 협업하기',
      '불합리 대처하기',
    ];
  }
}
