import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly mailService: MailService,
              private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {

    await this.prisma.notification.create({
      data: {
        content: body.content,
        category: body.category,
        recipientId: body.recipientId,
  }});
  //   await this.prisma.notification.create({
  //     data: {
  //       content: 'Você tem uma nova solicitação de amizade!',
  //       category: 'social',
  //       recipientId: randomUUID(),
  // }});
  }
}
