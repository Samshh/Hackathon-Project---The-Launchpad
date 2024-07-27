import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Doctor } from './doctor';

@Entity({
  name: 'doctor_schedule_exceptions',
})
export class Doctor_Schedule_Exception extends BaseEntity {
  @PrimaryGeneratedColumn()
  ExceptionID: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.schedule_exceptions)
  @JoinColumn({ name: 'DoctorID' })
  doctor: Doctor;

  @Column({ type: 'datetime' })
  ExceptionDateStart: Date;
  
  @Column({ type: 'datetime', nullable: true })
  ExceptionDateEnd: Date;

  @Column({ type: 'bigint' })
  created_at: number;

  @Column({ type: 'bigint' })
  updated_at: number;
}
