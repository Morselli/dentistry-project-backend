import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, ManyToOne } from "typeorm"
import { ClinicDentist } from "./ClinicDentist"

@Entity()
export class ClinicPatient {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @ManyToOne(() => ClinicDentist, (clinicDentist) => clinicDentist.clinicPatients)
  clinicDentist: ClinicDentist

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
  
  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
  
  @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date
}