import { markets } from "@prisma/client";
import { MarketEntity } from "./entities/market.entity";

export class MarketMapper {
    static toEntity(prismaMarket: markets): MarketEntity {
        return {
            id: prismaMarket.id,
            name: prismaMarket.name,
            address: prismaMarket.address,
            number: prismaMarket.number,
            neighborhood: prismaMarket.neighborhood,
            city: prismaMarket.city,
            state: prismaMarket.state,
            country: prismaMarket.country
        }
    }
}