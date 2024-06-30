import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Clinic } from "./entity/Clinic"
import { ClinicPatient } from "./entity/ClinicPatient"
import { ClinicDentist } from "./entity/ClinicDentist"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "dentistrysql",
    synchronize: false,
    logging: false,
    entities: [User, Clinic, ClinicDentist, ClinicPatient],
    migrations: [],
    subscribers: [],
})
