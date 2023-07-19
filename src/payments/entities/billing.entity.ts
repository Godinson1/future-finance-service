import { IsEmpty, IsUUID, IsDate } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'billing' })
export class Billing {
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

  @Column({ name: 'raised_by', nullable: false, type: 'text' })
  raisedBy?: string;

  @Column({ name: 'type', nullable: true, type: 'text' })
  type?: string;

  @Column({ name: 'order_id', nullable: true, type: 'text' })
  orderId?: string;

  @Column({ name: 'total_amount', nullable: false, type: 'text', default: '0' })
  totalAmount?: string;

  @Column({ name: 'currency', nullable: true, type: 'text' })
  currency?: string;

  @Column({ name: 'auto_generated', type: 'text', default: false })
  autoGenerated?: string;

  @Column({ name: 'archived', type: 'text', default: false })
  archived?: string;
}
