import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from 'future-connectors';
import { UserPaymentService } from 'src/payments/services/users/user-payment.service';

@Controller()
export class UserPaymentController {
  constructor(
    private readonly userPaymentService: UserPaymentService,
    private readonly rmqService: RmqService,
  ) {}
  @EventPattern('user.created')
  registerUser(@Payload() data: any, @Ctx() context: RmqContext) {
    this.userPaymentService.registerUser(data);
    this.rmqService.ack(context as any);
  }
}
