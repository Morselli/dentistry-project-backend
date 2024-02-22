import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Clinic } from "./entity/Clinic"
import { ClinicDentist } from "./entity/ClinicDentist"
import { ClinicPatient } from "./entity/ClinicPatient"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "dentaldb",
    synchronize: true,
    logging: false,
    entities: [User, Clinic, ClinicDentist, ClinicPatient],
    migrations: [],
    subscribers: [],
})
