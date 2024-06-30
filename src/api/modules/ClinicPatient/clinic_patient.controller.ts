import { Request, Response } from "express";
import { ClinicPatientService } from "./clinic_patient.service";

export class ClinicPatientController {

    private static clinicPatientService = new ClinicPatientService()

    async create(request: Request, response: Response): Promise<Response> {

        const { name, clinicDentistId } = request.body

        try {
            
            const clinicPatient = await ClinicPatientController.clinicPatientService.create({
                name,
                clinic_dentist_id: clinicDentistId
            })

            return response.json(clinicPatient)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async findById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            
            const clinicPatient = await ClinicPatientController.clinicPatientService.findById(Number(id))

            return response.json(clinicPatient)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async findAll(request: Request, response: Response): Promise<Response> {

        try {
            
            const clinicPatients = await ClinicPatientController.clinicPatientService.findAll()

            return response.json(clinicPatients)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async findAllFromClinicDentist(request: Request, response: Response): Promise<Response> {

        const { clinicDentistId } = request.params

        try {
            
            const clinicPatients = await ClinicPatientController.clinicPatientService.findAllFromClinicDentist(Number(clinicDentistId))

            return response.json(clinicPatients)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async updateById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        const { name, clinicDentistId } = request.body

        try {
            
            const clinicPatient = await ClinicPatientController.clinicPatientService.updateById(Number(id), {
                name,
                clinic_dentist_id: clinicDentistId
            })

            return response.json(clinicPatient)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }

    async removeById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params

        try {
            
            const deletedClinicPatient = await ClinicPatientController.clinicPatientService.removeById(Number(id))

            return response.json(deletedClinicPatient).status(204)
        } catch (error) {
            return response.json({ error: error.message })
        }
    }
}