import { IsEmpty, IsUUID, IsDate } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Wallet } from './wallet.entity';

@Entity({ name: 'transfers' })
export class Transfer {
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

  @ManyToOne(() => Wallet, (wallet) => wallet.id)
  fromWalletId?: Wallet;

  @ManyToOne(() => Wallet, (wallet) => wallet.id)
  toWalletId?: Wallet;

  @Column({ name: 'amount', nullable: false, type: 'text', default: '0' })
  amount?: string;

  @Column({ name: 'type', nullable: true, type: 'text' })
  type?: string;

  @Column({ name: 'currency', nullable: true, type: 'text' })
  currency?: string;
}
