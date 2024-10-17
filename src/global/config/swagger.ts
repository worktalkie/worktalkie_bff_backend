import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { readFile } from 'fs/promises';

import { join } from 'path';

export const SwaggerSetting = async (app: INestApplication) => {
  const swaggerConfig = await readFile(
    join(__dirname, '../../../../packages/api/swagger.json'),
    'utf8',
  );
  const swaggerDocument = JSON.parse(swaggerConfig);
  const configService = app.get(ConfigService);

  const host = configService.get('HOST');
  const port = configService.get('PORT');
  swaggerDocument.servers[0].url = `http://${host}:${port}`;

  SwaggerModule.setup('api/nestia', app, swaggerDocument);
  SwaggerModule.setup('api', app, swaggerDocument);
};
