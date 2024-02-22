import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

export enum UserRole {
    SUPER_ADMIN = 'Super Admin',
    ADMIN = 'Admin',
    DENTIST = 'Dentist'
}

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    cro: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: UserRole

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date
}
