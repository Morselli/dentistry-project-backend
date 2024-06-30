import { Request, Response } from "express";
import { ClinicDentistService } from "./clinic_dentist.service";


export class ClinicDentistController {

    private static clinicDentistService = new ClinicDentistService()

    async create(request: Request, response: Response): Promise<Response> {

        const { userId, clinicId } = request.body

        try {
            
            const clinicDentist = await ClinicDentistController.clinicDentistService.create({
                user_id: userId,
                clinic_id: clinicId
            })

            return response.json(clinicDentist)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async findById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            
            const clinicDentist = await ClinicDentistController.clinicDentistService.findById(Number(id))

            return response.json(clinicDentist)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async findAll(request: Request, response: Response): Promise<Response> {

        try {
            
            const clinicDentists = await ClinicDentistController.clinicDentistService.findAll()

            return response.json(clinicDentists)
        } catch (error) {
            return response.json({ error: error.message })   
        }
    }

    async findAllFromClinic(request: Request, response: Response): Promise<Response> {

        const { clinicId } = request.params

        try {
            
            const clinicDentists = await ClinicDentistController.clinicDentistService.findAllFromClinic(Number(clinicId))

            return response.json(clinicDentists)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async removeById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            
            const deletedClinicDentist = await ClinicDentistController.clinicDentistService.removeById(Number(id))

            return response.json(deletedClinicDentist).status(204)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}