import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MemberModule } from './member/member.module';
import { ConversationModule } from './conversation/conversation.module';
import { MagazineModule } from './magazine/magazine.module';
import { ScenarioModule } from './scenario/scenario.module';
import { RouterModule } from '@nestjs/core';
import { MissionModule } from './scenario/mission/mission.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MemberModule,
    ConversationModule,
    MagazineModule,
    ScenarioModule,
    MissionModule,
    RouterModule.register([
      {
        path: '/api/scenarios',
        module: ScenarioModule,
        children: [{ path: '/analysis', module: ScenarioModule }],
      },
      {
        path: '/api/scenarios',
        module: ScenarioModule,
        children: [{ path: '', module: MissionModule }],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
