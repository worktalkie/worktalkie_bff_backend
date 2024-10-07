import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerSetting } from './global/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await SwaggerSetting(app);
  await app.listen(3000);
}
bootstrap();
