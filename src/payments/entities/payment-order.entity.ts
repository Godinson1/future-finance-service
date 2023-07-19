import { IsEmpty, IsUUID, IsDate } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment_orders' })
export class PaymentOrder {
  @PrimaryGeneratedColumn('uuid')
  @IsEmpty()
  @IsUUID('4')
  id?: string;

  @IsDate()
  @CreateDateColumn({ name: 'created_date' })
  createdDate?: Date;

  @IsDate()
  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate?: Date;

  @Column({ name: 'order_id', nullable: true, type: 'text' })
  orderId?: string;

  @Column({ name: 'amount', nullable: true, type: 'text' })
  amount?: string;

  @Column({ name: 'currency', nullable: false, type: 'text', default: '0' })
  currency?: string;

  @Column({ name: 'status', nullable: true, type: 'text' })
  status?: string;

  @Column({ name: 'analytics_updated', type: 'text', default: false })
  analyticsUpdated?: string;

  @Column({ name: 'wallet_updated', type: 'text', default: false })
  walletUpdated?: string;
}
