import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nestjs_typeorm_two",
    synchronize: false,
    logging: true,
    entities: ["dist/**/*.entity{.ts,.js}"]
}

export default config;