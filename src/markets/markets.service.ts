import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { MarketsRepository } from './markets.repository';
import { MarketMapper } from './market.mapper';

@Injectable()
export class MarketsService {
	constructor(private readonly repository: MarketsRepository) {}
	async create(createMarketDto: CreateMarketDto) {
		const newMarket = await this.repository.create(createMarketDto);
		return MarketMapper.toEntity(newMarket);
	}

	async findAll() {
		const markets = await this.repository.getAll();
		return markets.map(market => MarketMapper.toEntity(market));
	}

	async findOne(id: number) {
		const market = await this.repository.getById(id);
		if(!market) throw new NotFoundException('Nenhum mercado encontrado com esse ID.');
		return MarketMapper.toEntity(market);
	}

	async update(id: number, updateMarketDto: UpdateMarketDto) {
		const updatedMarket = await this.repository.update(id, updateMarketDto);
		return MarketMapper.toEntity(updatedMarket);
	}

	async remove(id: number) {
		await this.repository.remove(id);

		return { message: 'Mercado removido com sucesso' };
	}
}