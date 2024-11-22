import {Entity, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import {getRandomString} from "../../libs/methods";
import {BusinessEntity} from "./business.entity";


@Entity()
export class TransportEntity {
    @PrimaryKey({type: 'string', default: getRandomString(), nullable: false})
    id = getRandomString()
    @Property({nullable: false})
    type!: "Train" | "Matatu" | "Cab" | "Boda";
    @Property({nullable: true})
    stage!: string;
    @ManyToOne({entity: ()=>BusinessEntity, mapToPk: true})
    place!: BusinessEntity;
}

