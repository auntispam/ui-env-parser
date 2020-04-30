import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';

@Module({
  imports: [ConfigModule],
  providers: [WorkerService],
})
export class WorkerModule {}