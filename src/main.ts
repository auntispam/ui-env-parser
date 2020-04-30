import { WorkerModule } from './worker/worker.module';
import { WorkerService } from './worker/worker.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const workerService = app.select(WorkerModule).get(WorkerService, { strict: true });
  workerService.parse();
}
bootstrap();
