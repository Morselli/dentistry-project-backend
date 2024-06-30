import { AppDataSource } from "../../../database/data-source"
import { Clinic } from "../../../database/entity/Clinic"

export const ClinicRepository = AppDataSource.getRepository(Clinic)