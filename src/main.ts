import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Title')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('tag-name') // Optional: add tags for organizing endpoints
    .addBearerAuth() // Optional: add support for Bearer token authentication
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document); // 'api' is the URL endpoint for your docs

  await app.listen(3000);
}
bootstrap();
