/* eslint-disable @typescript-eslint/no-namespace */

import { HttpStatus } from '@nestjs/common';

export type TG<T> = T[] | T;
export type TObj<T extends object> = { [key: string]: T };

export declare namespace MemberType {
  interface CreateRequestDto {
    name: string;
    email: string;
    loginId: string;
    password: string;
  }

  interface MemberDto {
    id: string;
    name: string;
    email: string;
  }

  interface LoginRequestDto {
    loginId: string;
    password: string;
  }

  export interface ProficiencyDto {
    score: number;
    dailyResult?: object[];
  }
}

export interface BaseResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data?: T;
}

export interface ErrorCode {
  httpStatus: HttpStatus;
  code: string;
  message: string;
}

export interface EnumType {
  key: string;
  value: string;
}

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
