import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TicketsDocument = Tickets & Document;

@Schema({ timestamps: true })
export class Tickets {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    type: number;

    @Prop()
    status: boolean;

    @Prop()
    priority: string;
}; 
export const TicketsSchema = SchemaFactory.createForClass(Tickets);