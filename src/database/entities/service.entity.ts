import {BeforeCreate, BeforeUpdate, Cascade, Entity, ManyToOne, PrimaryKey, Property} from "@mikro-orm/core";
import {getRandomString} from "../../libs/methods";
import {BusinessEntity} from "./business.entity";


@Entity()
export class ServiceEntity {
    @PrimaryKey({type: "string", default: getRandomString(), nullable: false})
    id = getRandomString();

    @Property({ nullable: false })
    name!: string;

    @Property({ nullable: true })
    price?: number;

    @ManyToOne({entity: ()=>BusinessEntity})
    business: BusinessEntity = new BusinessEntity();

    @BeforeCreate()
    @BeforeUpdate()
    runThisBeforeUpAndCreate(){
        if(!this.price){
            this.price = undefined
        }
        if(!this.id){
            this.id = getRandomString();
        }
    }
}

