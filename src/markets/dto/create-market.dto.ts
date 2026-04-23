import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateMarketDto {
        @IsNotEmpty({ message: 'O CNPJ deve ser preenchido.' })
        document!: string;

        @IsString({ message: 'O nome deve ser um texto.' })
        @IsNotEmpty({ message: 'O nome deve ser preenchido.' })
        name!: string;

        @IsString({ message: 'O endereço deve ser um texto.' })
        address!: string;

        @IsOptional()
        number?: string;

        @IsOptional()
        neighborhood?: string;

        @IsOptional()
        city?: string;

        @IsOptional()
        @MaxLength(30, { message: 'O estado deve ter no máximo 30 caracteres' })
        state?: string;

        @IsOptional()
        country?: string;
}
