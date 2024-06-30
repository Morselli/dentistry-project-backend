import { Router } from "express"
import { UserController } from "../api/modules/User/user.controller"
import { ClinicController } from "../api/modules/Clinic/clinic.controller"
import { ClinicDentistController } from "../api/modules/ClinicDentist/clinic_dentist.controller"
import { ClinicPatientController } from "../api/modules/ClinicPatient/clinic_patient.controller"

const router = Router()

const userController = new UserController()
const clinicController = new ClinicController()
const clinicDentistController = new ClinicDentistController()
const clinicPatientController = new ClinicPatientController()

router.post('/user/create', userController.create)
router.get('/user/:id', userController.findById)
router.put('/user/:id', userController.updateById)
router.delete('/user/:id', userController.removeById)
router.get('/users', userController.findAll)

router.post('/clinic/create', clinicController.create)
router.put('/clinic/:id', clinicController.updateById)
router.delete('/clinic/:id', clinicController.removeById)
router.get('/clinic/:id', clinicController.findById)
router.get('/clinics', clinicController.findAll)

router.post('/clinic/dentist/create', clinicDentistController.create)
router.get('/clinic/dentist/:id', clinicDentistController.findById)
router.get('/clinics/dentists', clinicDentistController.findAll)
router.get('/clinic/:clinicId/dentists', clinicDentistController.findAllFromClinic)
router.delete('/clinic/dentist/:id', clinicDentistController.removeById)

router.post('/clinic/patient/create', clinicPatientController.create)
router.get('/clinic/patient/:id', clinicPatientController.findById)
router.get('/clinics/patients', clinicPatientController.findAll)
router.get('/clinic/:clinicDentistId/patients', clinicPatientController.findAllFromClinicDentist)
router.put('/clinic/patient/:id', clinicPatientController.updateById)
router.delete('/clinic/patient/:id', clinicPatientController.removeById)

export { router }