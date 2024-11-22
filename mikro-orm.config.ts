import {defineConfig} from "@mikro-orm/core";
import {MySqlDriver} from "@mikro-orm/mysql";
import {Migrator} from "@mikro-orm/migrations";
import dotenv from "dotenv";
import {TsMorphMetadataProvider} from "@mikro-orm/reflection";
dotenv.config();

export default defineConfig({
    metadataProvider: TsMorphMetadataProvider,
    connect: true,
    driver: MySqlDriver,
    entities: ["dist/**/*.entity.js"],
    entitiesTs: ["src/**/*.entity.ts"],
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    dbName: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    extensions: [Migrator],
    migrations: {
        path: "./src/database/migrations",
        pathTs: "./src/database/migrations_ts",
    }
})

