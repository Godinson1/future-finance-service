import { Module } from '@nestjs/common';
import { PaymentModule } from './payments/payment.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
