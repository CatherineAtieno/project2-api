import {PrimaryKey, Property} from "@mikro-orm/core";
import {getRandomString} from "../../libs/methods";


export abstract class Base_userEntity {
    @PrimaryKey({type: 'string', unique: true})
    id = getRandomString();
    @Property()
    firstName!: string;
    @Property()
    lastName!: string;
    @Property()
    email!: string;
    @Property({default: "resident"})
    role: "tourist" | "resident" | "business" = "tourist";
    @Property()
    password!: string;
}

