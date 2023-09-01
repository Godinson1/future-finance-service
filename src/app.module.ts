import { Module } from '@nestjs/common';
import { RmqModule } from 'future-connectors';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payments/payment.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    RmqModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
