import { NestFactory } from '@nestjs/core';
import { RmqService } from 'future-connectors';
import { AppModule } from './app.module';
import { PAYMENT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(PAYMENT));
  await app.startAllMicroservices();
}
bootstrap();
