import { Module } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [NotificationsGateway],
  imports: [PrismaModule],
  exports: [NotificationsGateway],
})
export class NotificationModule {}
