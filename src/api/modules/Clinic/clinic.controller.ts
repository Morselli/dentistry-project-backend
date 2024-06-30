import { Request, Response } from "express";
import { ClinicService } from "./clinic.service"

export class ClinicController {

    private static clinicService = new ClinicService()

    async create(request: Request, response: Response): Promise<Response> {

        const {
            name,
            address,
            neighborhood,
            zipCode,
            city,
            state,
            address_number,
            phone
        } = request.body

        try {
            
            const user = await ClinicController.clinicService.create({
                name,
                address,
                neighborhood,
                zip_code: zipCode,
                city,
                state,
                address_number,
                phone
            })

            return response.json(user)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async updateById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const {
            name,
            address,
            neighborhood,
            zipCode,
            city,
            state,
            address_number,
            phone
        } = request.body

        try {
            
            const clinic = await ClinicController.clinicService.updateById(Number(id), {
                name,
                address,
                neighborhood,
                zip_code: zipCode,
                city,
                state,
                address_number,
                phone
            })

            return response.json(clinic)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async removeById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            
            const deletedClinic = await ClinicController.clinicService.removeById(Number(id))

            return response.json(deletedClinic)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async findById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            
            const clinic = await ClinicController.clinicService.findById(Number(id))

            return response.json(clinic)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async findAll(request: Request, response: Response): Promise<Response> {

        try {
            
            const clinics = await ClinicController.clinicService.findAll()

            return response.json(clinics)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}