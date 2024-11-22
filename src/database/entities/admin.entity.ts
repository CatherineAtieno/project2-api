import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import {Base_userEntity} from "./base_user.entity";
import {getRandomString} from "../../libs/methods";

@Entity()
export class AdminEntity{
    @PrimaryKey({type: "string", unique: true, default: getRandomString()})
    id: string = getRandomString();
    @Property({nullable: false, unique: true})
    userName!: string;
    @Property({nullable: false, unique: true})
    email!: string;
    @Property({nullable: false})
    password!: string;

}

