import { UpdateResult } from "typeorm"
import { Clinic } from "../../../database/entity/Clinic"
import { IClinicDto } from "./clinic.dto"
import { ClinicRepository } from "./clinic.repository"

export class ClinicService {

    private static clinicRepository = ClinicRepository

    async create({ name, address, neighborhood, zip_code, city, state, address_number, phone }: IClinicDto): Promise<Clinic> {

        if(!name) {
            throw new Error('Name is required')
        }

        const clinic = ClinicService.clinicRepository.create({
            name,
            address,
            neighborhood,
            zip_code,
            city,
            state,
            address_number,
            phone
        })

        await ClinicService.clinicRepository.save(clinic)

        return clinic

    }

    async updateById(id: number, {
        name,
        address,
        neighborhood,
        zip_code,
        city,
        state,
        address_number,
        phone,
    }: IClinicDto): Promise<Clinic> {

        const clinic = await ClinicService.clinicRepository.findOneBy({
            id
        })

        if(!clinic) {
            throw new Error('Clinic not found')
        }

        await ClinicService.clinicRepository.update(id, {
            name,
            address,
            neighborhood,
            zip_code,
            city,
            state,
            address_number,
            phone
        })

        const updatedClinic = await ClinicService.clinicRepository.findOneBy({
            id
        })

        return updatedClinic
    }

    async removeById(id: number): Promise<UpdateResult> {

        const clinic = await ClinicService.clinicRepository.findOneBy({
            id
        })

        if(!clinic) {
            throw new Error('Clinic not fount')
        }

        const deletedClinic = await ClinicService.clinicRepository.softDelete(id)

        return deletedClinic
    }

    async findById(id: number): Promise<Clinic> {

        const clinic = await ClinicService.clinicRepository.findOneBy({
            id
        })

        if(!clinic) {
            throw new Error('Clinic not found')
        }

        return clinic
    }

    async findAll(): Promise<Clinic[]> {
        const clinics = await ClinicService.clinicRepository.find()

        if(!clinics) {
            throw new Error('Clinics not found')
        }

        return clinics
    }
}