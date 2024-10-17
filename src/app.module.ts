import { Module } from '@nestjs/common';
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
        path: '',
        module: ScenarioModule,
        children: [
          { path: '', module: MissionModule },
          { path: '', module: ScenarioModule },
        ],
      },
    ]),
  ],
  providers: [AppService],
})
export class AppModule {}
