import { z } from 'zod';

export default class DoctorValidator {
  static createSchema = z.object({
    Fname: z.string().min(1, 'First name is required'),
    Lname: z.string().min(1, 'Last name is required'),
    Address: z.string().min(1, 'Address is required'),
    Specialization: z.string().min(1, 'Specialization is required'),
    Sex: z.string().min(1, 'Sex is required'),
    Email: z.string().email('Invalid email address'),
    Contact: z.string().min(10, 'Contact number must be at least 10 characters').max(15, 'Contact number must be at most 15 characters'),
  });

  static updateSchema = z.object({
    Fname: z.string().optional(),
    Lname: z.string().optional(),
    Address: z.string().optional(),
    Specialization: z.string().optional(),
    Sex: z.string().optional(),
    Email: z.string().email('Invalid email address').optional(),
    Contact: z.string().min(10, 'Contact number must be at least 10 characters').max(15, 'Contact number must be at most 15 characters').optional(),
  });

  static validateCreate = this.createSchema.safeParse;
  static validateUpdate = this.updateSchema.safeParse;
}
