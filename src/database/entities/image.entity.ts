import {BlobType, Entity, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import {getRandomString} from "../../libs/methods";
import {BusinessEntity} from "./business.entity";


@Entity()
export class ImageEntity {
    @PrimaryKey({type: "string", default: getRandomString(), unique: true})
    id!: string;

    @Property({type: "string", nullable: false})
    img!: string;

    @ManyToOne({entity: ()=>BusinessEntity, mapToPk: true})
    place = new BusinessEntity();
}

