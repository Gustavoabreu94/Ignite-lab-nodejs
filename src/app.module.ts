import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { AppService } from './infra/app.service';
import { MailService } from './infra/mail/mail.service';
import { SMTPMailService } from './infra/mail/smtp-maill.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
  {
    provide: MailService,
    useClass: SMTPMailService,
  }],
})
export class AppModule {}
