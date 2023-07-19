import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { WalletEntry } from './entities/wallet-entries.entity';
import { Address } from './entities/address.entity';
import { Transfer } from './entities/transfer.entity';
import { Transaction } from './entities/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Wallet,
      WalletEntry,
      Address,
      Transfer,
      Transaction,
    ]),
  ],
})
export class WalletModule {}
