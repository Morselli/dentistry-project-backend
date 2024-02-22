import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { User } from "./User"
import { Clinic } from "./Clinic"
import { ClinicPatient } from "./ClinicPatient"

@Entity()
export class ClinicDentist {

  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @ManyToOne(() => Clinic, (clinic) => clinic.clinicDentists)
  clinic: Clinic

  @OneToMany(() => ClinicPatient, (clinicPatient) => clinicPatient.clinicDentist)
  clinicPatients: ClinicPatient[]

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
  
  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
  
  @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date
}