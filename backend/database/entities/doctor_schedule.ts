import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from './doctor';

@Entity({
  name: 'doctor_schedules',
})
export class Doctor_Schedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.schedule)
  @JoinColumn({ name: 'DoctorID' })
  doctor: Doctor;

  @Column({ type: 'bigint' })
  day: number;

  @Column({ type: 'text' })
  starttime: string;

  @Column({ type: 'text' })
  endtime: string;
}
