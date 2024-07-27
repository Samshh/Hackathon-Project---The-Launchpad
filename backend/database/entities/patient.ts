import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Patient_Records } from './patient_record';
import { Appointment } from './appointment';

@Entity({
  name: 'patients',
})
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  PatientID: number;

  @Column({ type: 'text' })
  Fname: string;

  @Column({ type: 'text' })
  Lname: string;

  @Column({ type: 'text' })
  Sex: string;

  @Column({ type: 'text' })
  BirthDate: string;

  @Column({ type: 'text' })
  Password: string;

  @Column({ type: 'text', unique: true })
  Email: string;

  @Column({ type: 'text', unique: true })
  Contact: string;

  @Column({ type: 'bigint' })
  created_at: number;

  @Column({ type: 'bigint' })
  updated_at: number;

  @OneToMany(() => Patient_Records, (patient_records) => patient_records.patient)
  records: Patient_Records[];

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];
}
