import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerSetting } from './global/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });
  app.enableCors();

  await SwaggerSetting(app);

  await app.listen(3000);
}

bootstrap().then(() =>
  console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`),
);
