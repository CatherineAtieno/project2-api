import {BeforeCreate, BeforeUpdate, Entity, OneToMany} from "@mikro-orm/core";
import {Base_userEntity} from "./base_user.entity";
import {BusinessEntity} from "./business.entity";

@Entity()
export class UserEntity extends Base_userEntity {
    @OneToMany({entity: () => BusinessEntity, mappedBy: "owner"})
    business?: BusinessEntity;

    @BeforeCreate()
    @BeforeUpdate()
    runThisOnCreateAndUpdate(){
        if(this.role !== 'business')
            this.business = undefined;
        return this
    }
}

