import { PaginationDto } from '../global/type';

export class MagazineService {
  async getMagazinesByPaging(paginationDto: PaginationDto): Promise<object> {
    return paginationDto;
  }

  async getDetailMagazine(magazineId: string): Promise<object> {
    return { id: magazineId };
  }
}
