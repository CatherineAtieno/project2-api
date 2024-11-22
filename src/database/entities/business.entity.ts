import {
    Collection,
    Embeddable,
    Embedded,
    Entity,
    ManyToOne,
    OneToMany,
    OnLoad,
    PrimaryKey,
    Property
} from "@mikro-orm/core";
import {getRandomString} from "../../libs/methods";
import {UserEntity} from "./user.entity";
import {ServiceEntity} from "./service.entity";
import {ImageEntity} from "./image.entity";
import {ReviewEntity} from "./review.entity";
import {TransportEntity} from "./transport.entity";

@Embeddable()
export class Address {
    @Property({nullable: false})
    county!: string;
    @Property({nullable: false})
    town!: string;
    @Property({nullable: true})
    street?: string;
    @Property({nullable: true})
    maps?: string;
}


@Entity()
export class BusinessEntity {
    @PrimaryKey({type: "string", nullable: false, default: getRandomString(), unique: true})
    id: string = getRandomString();
    @Property()
    name!: string;
    @Property()
    phone!: string;
    @Property()
    email!: string;
    @Embedded()
    address!: Address;
    @OneToMany({entity: () => TransportEntity, mappedBy: "place"})
    transport = new Collection<TransportEntity>(TransportEntity);
    @Property({default: 'hotel'})
    kind: 'hotel' | 'restaurant' | 'fun place' = 'hotel'
    @OneToMany({entity: () => ImageEntity, mappedBy: "place"})
    images = new Collection(ImageEntity);
    @OneToMany({entity: () => ServiceEntity, mappedBy: "business"})
    services = new Collection<ServiceEntity>(ServiceEntity);
    @ManyToOne({entity: () => UserEntity, nullable: true})
    owner?: UserEntity;
    @OneToMany({entity: () => ReviewEntity, mappedBy: 'place', nullable: true})
    reviews = new Collection<ReviewEntity>(ReviewEntity);

    calculateRating() {
        if (this.reviews.isInitialized())
            return this.reviews.reduce((a, review) => a + review.stars, 0) / this.reviews.length;
    }

    // @Property({nullable: true})
    set rating(rating: number|undefined){
        this.rating = rating
    }

    // private rating?: number
    @Property({nullable: true})
    get rating(){
        return this.calculateRating();
    }
    @OnLoad()
    onLoad() {
        console.log("rating")
        // this.rating = this.calculateRating()
    }
}

