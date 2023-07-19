import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPaymentService {
  registerUser(data: any): void {
    console.log('payment-data-user', data);
  }
}
