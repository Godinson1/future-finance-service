import { IsEmpty, IsUUID, IsDate } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WalletEntry } from './wallet-entries.entity';
import { Address } from './address.entity';

@Entity({ name: 'wallets' })
export class Wallet {
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

  @Column({ name: 'owner', nullable: false, type: 'text' })
  owner?: string;

  @Column({
    name: 'available_balance',
    nullable: false,
    type: 'text',
    default: '0',
  })
  availableBalance?: string;

  @Column({ name: 'balance', nullable: false, type: 'text', default: '0' })
  balance?: string;

  @Column({ name: 'type', nullable: true, type: 'text' })
  type?: string;

  @Column({ name: 'currency', nullable: true, type: 'text' })
  currency?: string;

  @Column({ name: 'active', nullable: true, type: 'text', default: false })
  active?: string;

  @OneToMany(() => WalletEntry, (wallet_entry) => wallet_entry.wallet)
  walletEntry: WalletEntry[];

  @OneToMany(() => Address, (address) => address.wallet)
  address: Address[];
}
