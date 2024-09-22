import { Controller } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('/missions')
export class MissionController {
  constructor(private readonly missionService: MissionService) {}
}
