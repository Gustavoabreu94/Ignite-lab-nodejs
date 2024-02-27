import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-maill.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: MailService,
    useClass: SMTPMailService,
  }],
})
export class AppModule {}