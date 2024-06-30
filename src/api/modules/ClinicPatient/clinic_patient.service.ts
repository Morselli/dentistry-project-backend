import { UpdateResult } from "typeorm";
import { ClinicPatient } from "../../../database/entity/ClinicPatient";
import { IClinicPatientDto } from "./clinic_patient.dto";
import { ClinicPatientRepository } from "./clinic_patient.repository";


export class ClinicPatientService {

    private static clinicPatientRepository = ClinicPatientRepository

    async create({ name, clinic_dentist_id }: IClinicPatientDto): Promise<ClinicPatient> {

        const clinicPatient = ClinicPatientService.clinicPatientRepository.create({
            name,
            clinic_dentist_id
        })

        await ClinicPatientService.clinicPatientRepository.save(clinicPatient)

        return clinicPatient
    }

    async findById(id: number): Promise<ClinicPatient> {

        const clinicPatient = await ClinicPatientService.clinicPatientRepository.findOneBy({
            id
        })

        if(!clinicPatient) {
            throw new Error('Clinic patient not found')
        }

        return clinicPatient
    }

    async findAll(): Promise<ClinicPatient[]> {

        const clinicPatients = await ClinicPatientService.clinicPatientRepository.find()

        if(!clinicPatients) {
            throw new Error('Clinic patients not found')
        }

        return clinicPatients
    }

    async findAllFromClinicDentist(clinic_dentist_id: number): Promise<ClinicPatient[]> {

        const clinicPatients = await ClinicPatientService.clinicPatientRepository.findBy({
            clinic_dentist_id
        })

        if(!clinicPatients) {
            throw new Error('Clinic patients not found')
        }

        return clinicPatients
    }

    async updateById(id: number, { name, clinic_dentist_id }: IClinicPatientDto): Promise<ClinicPatient> {

        const clinicPatient = await ClinicPatientService.clinicPatientRepository.findOneBy({
            id
        })

        if(!clinicPatient) throw new Error('Clinic patient not found')

        await ClinicPatientService.clinicPatientRepository.update(Number(id), {
            name,
            clinic_dentist_id
        })

        const updatedClinicPatient = await ClinicPatientService.clinicPatientRepository.findOneBy({
            id
        })

        return updatedClinicPatient
    }

    async removeById(id: number): Promise<UpdateResult> {

        const clinicPatient = await ClinicPatientService.clinicPatientRepository.findOneBy({
            id
        })

        if(!clinicPatient) throw new Error('Clinic patient not found')

        const deletedClinicPatient = await ClinicPatientService.clinicPatientRepository.softDelete(id)

        return deletedClinicPatient
    }
}