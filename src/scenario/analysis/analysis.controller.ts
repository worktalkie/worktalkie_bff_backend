import { Controller, HttpStatus } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { TypedParam, TypedRoute } from '@nestia/core';
import { AnalysisType, BaseResponse } from '../../global/type';
import { createResponse } from '../../global/util/mapper';

@Controller('/analysis')
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  /**
   * @summary 분석 결과 조회 API
   * @tag analysis
   * @param scenarioId
   * @return 분석 결과
   */
  @TypedRoute.Get('/:scenarioId')
  async getAnalysisResult(
    @TypedParam('scenarioId') scenarioId: number,
  ): Promise<BaseResponse<AnalysisType.ResultResponseDto>> {
    const result = await this.analysisService.getAnalysisResult(scenarioId);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 분석 결과 생성 API
   * @tag analysis
   * @param analysisResult
   */
  @TypedRoute.Post('')
  async saveAnalysisResult(analysisResult: any): Promise<BaseResponse<object>> {
    await this.analysisService.saveAnalysisResult(analysisResult);
    return createResponse(HttpStatus.CREATED);
  }
}
