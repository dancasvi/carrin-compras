import { Injectable } from "@nestjs/common";
import { markets } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMarketDto } from "./dto/create-market.dto";
import { UpdateMarketDto } from "./dto/update-market.dto";

@Injectable()
export class MarketsRepository {
	constructor(private prisma: PrismaService) {}

	async create(data: CreateMarketDto): Promise<markets> {
		return this.prisma.markets.create({ data });
	}

	async getById(id: number): Promise<markets | null> {
		return this.prisma.markets.findUnique({
				where: { id },
		});
	}

	async getAll(): Promise<markets[]> {
		const data = await this.prisma.markets.findMany();
		return data;
	}

	async update(id: number, data: UpdateMarketDto): Promise<markets> {
		return this.prisma.markets.update({
				where: { id },
				data: data,
		});
	}

	async remove(id: number): Promise<markets> {
		return this.prisma.markets.delete({
				where: { id },
		});
	}
}