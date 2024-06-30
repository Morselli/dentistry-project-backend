import { UpdateResult } from "typeorm"
import { ClinicDentist } from "../../../database/entity/ClinicDentist"
import { IClinicDentistDto } from "./clinic_dentist.dto"
import { ClinicDentistRepository } from "./clinic_dentist.repository"

export class ClinicDentistService {

    private static clinicDentistRepository = ClinicDentistRepository

    async create({ user_id, clinic_id }: IClinicDentistDto): Promise<ClinicDentist> {
        
        const clinicDentist = ClinicDentistService.clinicDentistRepository.create({
            user_id,
            clinic_id
        })

        await ClinicDentistService.clinicDentistRepository.save(clinicDentist)

        return clinicDentist
    }

    async findById(id: number): Promise<ClinicDentist> {

        const clinicDentist = await ClinicDentistService.clinicDentistRepository.findOneBy({
            id
        })

        if(!clinicDentist) {
            throw new Error('Clinic dentist not found')
        }

        return clinicDentist
    }

    async findAll(): Promise<ClinicDentist[]> {

        const clinicDentists = await ClinicDentistService.clinicDentistRepository.find()

        if(!clinicDentists) {
            throw new Error('Clinic dentists not found')
        }

        return clinicDentists
    }

    async findAllFromClinic(clinicId: number): Promise<ClinicDentist[]> {

        const clinicDentists = await ClinicDentistService.clinicDentistRepository.findBy({
            clinic_id: clinicId
        })

        if(!clinicDentists) {
            throw new Error('Clinic dentists not found')
        }

        return clinicDentists
    }

    async removeById(id: number): Promise<UpdateResult> {

        const clinicDentist = await ClinicDentistService.clinicDentistRepository.findOneBy({
            id
        })

        if(!clinicDentist) throw new Error('Clinic dentist not found')

        const deletedClinicDentist = await ClinicDentistService.clinicDentistRepository.softDelete(id)

        return deletedClinicDentist
    }
}