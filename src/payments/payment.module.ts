import { Module } from '@nestjs/common';
import { OrderPaymentController } from './controllers/orders/order-payment.controller';
import { OrderPaymentService } from './services/orders/order-payment.service';
import { RmqModule, AuthModule, AUTH_SERVICE } from 'future-connectors';
import { UserPaymentController } from './controllers/users/user-payment.controller';
import { UserPaymentService } from './services/users/user-payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billing } from './entities/billing.entity';
import { PaymentOrder } from './entities/payment-order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Billing, PaymentOrder]),
    AuthModule,
    RmqModule.register({ name: AUTH_SERVICE }),
  ],
  controllers: [OrderPaymentController, UserPaymentController],
  providers: [OrderPaymentService, UserPaymentService],
})
export class PaymentModule {}
