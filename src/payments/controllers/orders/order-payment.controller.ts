import { Controller, UseGuards } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService, JwtAuthGuard } from 'future-connectors';
import { OrderPaymentService } from 'src/payments/services/orders/order-payment.service';

@Controller()
export class OrderPaymentController {
  constructor(
    private readonly orderPaymentService: OrderPaymentService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('order_created')
  @UseGuards(JwtAuthGuard)
  chargeOrder(@Payload() data: any, @Ctx() context: RmqContext) {
    this.orderPaymentService.chargeOrder(data);
    this.rmqService.ack(context as any);
  }
}
