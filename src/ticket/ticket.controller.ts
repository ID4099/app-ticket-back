import { Body, Controller, HttpCode, Post, Get } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketDto } from './dto/ticket.dto';

@Controller('tickets')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService
    ) {}

  @Post('/create')
  @HttpCode(200)
  async createTicket(@Body() newTicketDto: TicketDto){
    return await this.ticketService.createTicket(newTicketDto);
  }

  @Get('/bring/all')
  @HttpCode(200)
  async bringAllTickets(){
    return await this.ticketService.bringAllTickets();
  }

  @Post('/download/file')
  @HttpCode(200)
  async updateTicket(@Body() updateTicket: TicketDto) {
    await this.ticketService.updateTicket(updateTicket);
    return true;
  } 
}
