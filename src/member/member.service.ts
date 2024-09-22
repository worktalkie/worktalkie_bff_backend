import { MemberType } from '../global/type';

export class MemberService {
  async createMember(
    input: MemberType.CreateRequestDto,
  ): Promise<MemberType.MemberDto> {
    // TODO: supabase 멤버 데이터 저장
    console.log(input);
    const memberId: string = 'uuid';

    return this.getMember(memberId);
  }

  async getMember(id: string): Promise<MemberType.MemberDto> {
    // TODO: supabase 멤버 조회
    console.log(id);

    return {
      id: 'uuid',
      name: '이이름',
      email: 'name123@naver.com',
    };
  }

  async login(
    input: MemberType.LoginRequestDto,
  ): Promise<MemberType.MemberDto> {
    // TODO: supabase 로그인 처리
    console.log(input);

    return this.getMember(input.loginId);
  }

  async getProficiencies(id: string): Promise<MemberType.ProficiencyDto> {
    // TODO: id로 조회
    console.log(id);

    return {
      score: 80,
      dailyResult: [{ data: '아몰랑' }, { data: '모르띠~' }],
    };
  }
}
