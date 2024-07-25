import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Patient } from './patient';

@Entity({
  name: 'patient_records',
})
export class Patient_Records extends BaseEntity {
  @PrimaryGeneratedColumn()
  RecordID: number;

  @Column({ type: 'text' })
  FilePath: string;

  @Column({ type: 'text' })
  Name: string;

  @Column({ type: 'date' })
  ReleaseDate: Date;

  @ManyToOne(() => Patient, (patient) => patient.records)
  @JoinColumn({ name: 'PatientID' })
  patient: Patient;
}
