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

@Entity({ name: 'address' })
export class Address {
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

  @Column({ name: 'address_type', nullable: false, type: 'text' })
  addressType?: string;

  @Column({ name: 'address_hash', nullable: false, type: 'text' })
  addressHash?: string;

  @ManyToOne(() => Wallet, (wallet) => wallet.address)
  wallet?: Wallet;

  @Column({ name: 'active', nullable: true, type: 'text', default: false })
  active?: string;
}
