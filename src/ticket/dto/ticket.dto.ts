import { ArrayNotEmpty, IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TicketDto {

        id?: string;

        @IsString() @IsNotEmpty()
        title: string;

        @IsString() @ArrayNotEmpty()
        description: string;

        @IsNumber() @IsNotEmpty()
        type: number;

        @IsBoolean() @IsNotEmpty()
        status: boolean;

        @IsString() @IsNotEmpty()
        priority: string;
}