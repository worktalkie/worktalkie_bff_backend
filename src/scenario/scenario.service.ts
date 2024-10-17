import { ListType, PaginationDto, ScenarioType } from '../global/type';

export class ScenarioService {
  async getScenariosByPaging(paginationDto: PaginationDto): Promise<ListType> {
    return {
      count: 2,
      contents: [{ scenarios: paginationDto }, { scenarios: paginationDto }],
    };
  }

  async getDetailScenario(
    scenarioId: string,
  ): Promise<ScenarioType.DetailScenarioDto> {
    console.log(scenarioId);

    return {
      title: '아몰랑',
      contents: '아몰라라라라라랄',
      missions: [{ title: '미션1' }, { title: '미션2' }, { title: '미션3' }],
      tips: [{ title: '응 아니야' }, { title: '응 그런거 없어' }],
    };
  }

  async getScenariosByCategoryId(
    categoryId: string,
  ): Promise<ScenarioType.ScenarioPagingDto> {
    // TODO: categoryId 입력으로 조회. categoryId 입력 유효성 검사
    console.log(categoryId);

    return {
      count: 5,
      contents: [
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

  async getCategories(): Promise<ScenarioType.CategoryDto[]> {
    return [
      {
        id: '1ad',
        title: '비즈니스 통화하기',
        imageUrl: 'https://naver@dasdsdghdshfdh.com',
      },
      {
        id: '2gs',
        title: '회사 내 스몰토크하기',
        imageUrl: 'https://naver2.com',
      },
      {
        id: '3sf',
        title: '연차 사용 및 병가 문의하기',
        imageUrl: 'https://naver3.com',
      },
      {
        id: '4gdfh',
        title: '업무상황 보고하기',
        imageUrl: 'https://nave4r.com',
      },
      {
        id: '5sd',
        title: '타 부서와 협업하기',
        imageUrl: 'https://n5aver.com',
      },
      {
        id: '6sghd',
        title: '불합리 대처하기',
        imageUrl: 'https://na6ver.com',
      },
    ];
  }
}
