import { Controller } from '@nestjs/common';
import { ConversationService } from './conversation.service';

@Controller('/api/conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}
}
