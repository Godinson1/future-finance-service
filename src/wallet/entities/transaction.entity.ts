import { IsEmpty, IsUUID, IsDate } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'transactions' })
export class Transaction {
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

  @Column({ name: 'initiator', nullable: false, type: 'text' })
  initiator?: string;

  @Column({ name: 'recipient', nullable: false, type: 'text' })
  recipient?: string;

  @Column({ name: 'amount', nullable: true, type: 'text' })
  amount?: string;

  @Column({ name: 'type', nullable: false, type: 'text' })
  type?: string;

  @Column({ name: 'description', nullable: false, type: 'text' })
  description?: string;

  @Column({ name: 'status', nullable: false, type: 'text', default: false })
  status?: string;
}
