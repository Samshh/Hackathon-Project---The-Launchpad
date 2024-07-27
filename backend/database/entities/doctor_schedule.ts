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

  @Column({ type: 'text' })
  day: string;

  @Column({ type: 'text' })
  time: string;

  @Column({ type: 'bigint' })
  created_at: number;

  @Column({ type: 'bigint' })
  updated_at: number;
}
