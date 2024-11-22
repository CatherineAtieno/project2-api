import {Entity, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import {getRandomString} from "../../libs/methods";
import {UserEntity} from "./user.entity";
import {BusinessEntity} from "./business.entity";


@Entity()
export class ReviewEntity{
    @PrimaryKey({default: getRandomString(), unique: true, type: 'string'})
    id = getRandomString()
    @ManyToOne({entity: ()=>UserEntity, mapToPk: true})
    user!: UserEntity;
    @Property({nullable: false, type: 'numeric'})
    stars!: number;
    @ManyToOne({entity: ()=>BusinessEntity})
    place!: BusinessEntity;
    @Property({type: "string", nullable: true})
    review?: string;
}

