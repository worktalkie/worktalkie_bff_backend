import * as MemberApi from '../../src/api/functional/api/members';
import * as MemberProficienciesApi from '../../src/api/functional/api/members/proficiencies';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { MemberType } from '../../src/global/type';
import typia from 'typia';

describe('E2E Member', () => {
  const host = 'http://localhost:3000';
  let app: INestApplication;
  let testingModule: TestingModule;

  beforeAll(async () => {
    testingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = testingModule.createNestApplication();
    await (await app.init()).listen(3000);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Member E2E 테스트', () => {
    it('POST /api/members (create member)', async () => {
      // GIVEN
      const member = typia.random<MemberType.CreateRequestDto>();

      // WHEN
      const response = await MemberApi.createMember({ host }, member);

      // THEN
      expect(response).toEqual({
        statusCode: 201,
        data: {
          email: member.email,
          id: expect.any(String),
          name: member.name,
        },
      });
    });

    it('POST /api/members/login (login member)', async () => {
      // GIVEN
      const loginRequest = typia.random<MemberType.LoginRequestDto>();

      // WHEN
      const response = await MemberApi.login({ host }, loginRequest);

      // THEN
      expect(response.data).toEqual({
        statusCode: 200,
        data: {},
      });
    });

    it('GET /api/members/:id/proficiencies (get proficiencies)', async () => {
      // GIVEN
      const memberId = typia.random<string>();

      // WHEN
      const response = await MemberProficienciesApi.getProficiencies(
        { host },
        memberId,
      );

      // THEN
      expect(response.data).toEqual({
        statusCode: 200,
        data: {
          proficiencyLevel: 'advanced',
        },
      });
    });
  });
});
