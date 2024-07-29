import { Binary } from 'typeorm';
import { z } from 'zod';


export default class ScheduleValidator {
    static schema = z.object({
        day: z.number(),
        starttime: z.string().min(1),
        endtime: z.string().min(1),
        });
    
    static validate = this.schema.safeParse;
    }