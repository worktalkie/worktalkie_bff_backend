import { MissionType } from '../../global/type';

export class MissionService {
  async getMissions(scenarioId: number): Promise<MissionType.MissionDto[]> {
    // TODO: 미션 서비스에서 미션 조회해오게 구현
    console.log(scenarioId);

    return [{ title: 'scenarioId' }, { title: 'scenarioIddddd' }];
  }

  async getMissionsResult(
    scenarioId: string,
  ): Promise<MissionType.missionResultResponseDto[]> {
    // TODO: 시나리오 서버에서 미션 결과 조회
    console.log(scenarioId);

    return [
      {
        id: '1번',
        title: '직장 동료에게 인사할까 말까',
        result: true,
      },
      {
        id: '2번',
        title: '직장 동료에게 밥 먹자고 할까 말까',
        result: false,
      },
    ];
  }

  async clearMission(missionId: string) {
    // TODO: 시나리오 서버에 미션 성공 update api 호출
    console.log(missionId);
  }
}
