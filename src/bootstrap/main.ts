import {
  ValidationPipe,
  VERSION_NEUTRAL,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const configService: ConfigService = app.get(ConfigService);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
    defaultVersion: VERSION_NEUTRAL,
  });

  const config = new DocumentBuilder()
    .setTitle('CashCleaver - api')
    .setVersion('1.0')
    .addServer('http://localhost:3000')
    .build();

  const options2 = {
    customCss: `
        .topbar-wrapper img {content:url(https://www.graodireto.com.br/img/graodireto-logo-scroll.png); width:300px; height:auto;}
          .swagger-ui .topbar { background-color: white; }
        .swagger-ui { background-color: #F6F6F6; }
        .swagger-ui .scheme-container { background-color: #F6F6F6; }
        .swagger-ui .opblock.opblock-get .opblock-summary-method { background-color: #8CC63F; }
        .swagger-ui .auth-wrapper .authorize { border-color: #8CC63F; }
        .swagger-ui .btn.authorize { color: #8CC63F; }
        .swagger-ui .btn.authorize svg { fill: #8cc63f; }
        .swagger-ui .opblock.opblock-get { background: #D8E2CC; border-color: #8cc63f; }
        .swagger-ui .opblock.opblock-post { background: #D8E2CC; border-color: #8cc63f; }
        .swagger-ui .opblock.opblock-post .opblock-summary-method { background-color: #8CC63F; }
        `,
    customSiteTitle: 'Cash Cleaver API',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, options2);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
