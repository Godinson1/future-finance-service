import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderPaymentService {
  chargeOrder(data: any): void {
    console.log('payment-data', data);
  }
}
