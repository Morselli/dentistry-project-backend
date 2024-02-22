import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { ClinicDentist } from "./ClinicDentist"

@Entity()
export class Clinic {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  street: string

  @Column()
  neighborhood: string

  @Column()
  zip_code: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  number: string

  @Column()
  phone: string

  @OneToMany(() => ClinicDentist, (clinicDentist) => clinicDentist.user)
  clinicDentists: ClinicDentist[]

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
  
  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
  
  @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date
}