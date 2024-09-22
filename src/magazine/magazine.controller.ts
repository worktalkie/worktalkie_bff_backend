import { Controller } from '@nestjs/common';
import { MagazineService } from './magazine.service';
import { TypedParam, TypedQuery, TypedRoute } from '@nestia/core';
import { PaginationDto } from '../global/type';

@Controller('/api/magazines')
export class MagazineController {
  constructor(private readonly magazineService: MagazineService) {}

  /**
   * @summary 매거진 페이징 조회
   * @tag magazine
   * @param paginationDto 페이징 정보
   */
  @TypedRoute.Get('')
  async getMagazinesByPaging(
    @TypedQuery() paginationDto: PaginationDto,
  ): Promise<any> {
    return await this.magazineService.getMagazinesByPaging(paginationDto);
  }

  /**
   * @summary 매거진 상세정보 조회
   * @tag magazine
   * @param magazineId 매거진 id
   */
  @TypedRoute.Get(':id')
  async getDetailMagazine(
    @TypedParam('id') magazineId: number,
  ): Promise<object> {
    return await this.magazineService.getDetailMagazine(magazineId);
  }
}
