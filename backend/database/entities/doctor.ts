import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Appointment } from './appointment';
import { Doctor_Schedule_Exception } from './doctor_schedule_exception';
import { Doctor_Schedule } from './doctor_schedule';

@Entity({
  name: 'doctors',
})
export class Doctor extends BaseEntity {
  @PrimaryGeneratedColumn()
  DoctorID: number;

  @Column({ type: 'text' })
  Fname: string;

  @Column({ type: 'text' })
  Lname: string;

  @Column({ type: 'text' })
  Password: string;

  @Column({ type: 'text' })
  Address: string;

  @Column({ type: 'text' })
  Specialization: string;

  // @Column({ type: 'text' })
  // Department: string;

  @Column({ type: 'text' })
  Sex: string;

  @Column({ type: 'text', unique: true })
  Email: string;

  @Column({ type: 'text' })
  Contact: string;

  @Column({ type: 'bigint' })
  created_at: number;

  @Column({ type: 'bigint' })
  updated_at: number;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments: Appointment[];

  @OneToMany(() => Doctor_Schedule_Exception, (doctor_schedule_exception) => doctor_schedule_exception.doctor)
  schedule_exceptions: Doctor_Schedule_Exception[];

  @OneToMany(() => Doctor_Schedule, (doctor_schedule) => doctor_schedule.doctor)
  schedule: Doctor_Schedule[];
}
