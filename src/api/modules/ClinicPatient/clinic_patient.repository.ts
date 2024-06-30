import { AppDataSource } from "../../../database/data-source"
import { ClinicPatient } from "../../../database/entity/ClinicPatient"

export const ClinicPatientRepository = AppDataSource.getRepository(ClinicPatient)