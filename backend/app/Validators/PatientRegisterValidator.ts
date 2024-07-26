import { Binary } from 'typeorm';
import { z } from 'zod';

export default class UserRegisterValidator {
  static schema = z.object({
    Fname: z.string().min(1),
    Lname: z.string().min(1),
    Sex: z.string().min(1),
    Email: z.string().email(),
    BirthDate: z.string().min(1),
    Contact: z.string().min(10).max(15),
    Password: z.string().min(6),
    });

  static validate = this.schema.safeParse;
}