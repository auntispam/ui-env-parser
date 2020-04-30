import { WorkerModule } from './worker/worker.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [WorkerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
