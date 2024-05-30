import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TicketDto } from './dto/ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tickets } from './schemas/tikets.schema';
import { Model } from 'mongoose';


@Injectable()
export class TicketService {
    constructor(
        @InjectModel(Tickets.name) private readonly TicketModel: Model<Tickets>
    ){}

    async createTicket( data: TicketDto ): Promise<boolean>{
        try {
            const newTicket = new this.TicketModel(data);
            await newTicket.save();
            return true;
        } catch (error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async bringAllTickets(): Promise<TicketDto[]>{
        try {
            const selectAttributes = [ 'id', 'title', 'description', 'type', 'status', 'priority', 'createdAt' ];
            const result = await this.TicketModel.find().select(selectAttributes);
            return result
        } catch (error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateTicket(data: TicketDto): Promise<boolean> {
        try {
            await this.TicketModel.updateOne(data);
            return true
        } catch (error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
