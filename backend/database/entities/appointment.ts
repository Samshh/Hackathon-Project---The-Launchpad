import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Patient } from './patient';
import { Doctor } from './doctor';

export enum AppointmentStatus {
  PENDING = 0,
  APPROVED = 1,
}

@Entity({
  name: 'appointment',
})

export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  AppointmentID: number;

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  @JoinColumn({ name: 'PatientID' })
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  @JoinColumn({ name: 'DoctorID' })
  doctor: Doctor;

  @Column({ type: 'boolean' })
  Status: boolean;

  @Column({ type: 'datetime' })
  ETA: Date;

  @Column({ type: 'text', nullable: true })
  Reason: string;

  @Column({ type: 'text', nullable: true })
  Note: string;

  @Column({ type: 'text', nullable: true })
  Diagnosis: string;

  @Column({ type: 'text', nullable: true })
  Prescription: string;

  @Column({ type: 'bigint' })
  created_at: number;

  @Column({ type: 'bigint' })
  updated_at: number;

}
