import { AnalysisType } from '../../global/type';

export class AnalysisService {
  async getAnalysisResult(
    scenarioId: string,
  ): Promise<AnalysisType.ResultResponseDto> {
    // TODO: scenarioId 입력으로 조회. scenarioId 입력 유효성 검사
    console.log(scenarioId);

    return {
      sessionId: '1',
      successFlag: true,
      missionRate: 100,
      conversationRate: 100,
      mannerRate: 100,
      missionResult: [
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
      ],
      conversationProficiency: {},
      conversationHistory: [
        {
          sessionId: 'session_001',
          isAI: false,
          chat: 'Hello, how can I assist you today?',
          feedback: 'Very helpful!',
          isGood: true,
          createdAt: '2024-10-05T10:00:00Z',
        },
        {
          sessionId: 'session_001',
          isAI: true,
          chat: 'I need help with my project.',
          createdAt: '2024-10-05T10:01:00Z',
        },
        {
          sessionId: 'session_001',
          isAI: false,
          chat: 'Can you explain the error I am facing?',
          feedback: 'Very helpful!',
          isGood: true,
          createdAt: '2024-10-05T11:00:00Z',
        },
        {
          sessionId: 'session_001',
          isAI: true,
          chat: 'The error seems to be related to a missing dependency.',
          createdAt: '2024-10-05T11:15:00Z',
        },
        {
          sessionId: 'session_001',
          isAI: false,
          chat: 'Got it, thanks for the clarification.',
          feedback: 'clear',
          isGood: true,
          createdAt: '2024-10-05T11:20:00Z',
        },
      ],
    };
  }

  async saveAnalysisResult(analysisResult: any) {}
}
