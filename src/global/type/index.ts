export interface ListType {
  data: any[];
  count: number;
}

export interface PaginationDto {
  /**
   * 페이지네이션의 페이지 값
   * @minimum 1
   */
  page: number;

  /**
   * @maximum 100
   */
  limit: number;
}
