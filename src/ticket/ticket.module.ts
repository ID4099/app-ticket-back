import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Tickets, TicketsSchema } from './schemas/tikets.schema';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useFactory: ()=>({
        uri: process.env.MONGO_URI
      })
    }),
    MongooseModule.forFeature([
      { name: Tickets.name, schema: TicketsSchema }
    ]),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: configService.get('HTTP_TIMEOUT'),
        maxRedirects: configService.get('HTTP_MAX_REDIRECTS'),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [TicketController],
  providers: [
    TicketService
  ],
})
export class TicketModule {}
