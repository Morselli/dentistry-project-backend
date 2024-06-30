import { ClinicDentist } from "../../../database/entity/ClinicDentist"
import { AppDataSource } from "../../../database/data-source"

export const ClinicDentistRepository = AppDataSource.getRepository(ClinicDentist)