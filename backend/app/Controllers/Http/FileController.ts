import { Patient_Records } from 'Database/entities/patient_record';
import { Response, Request } from 'express';

export default class FileController {
  static async getAllFiles(request: Request, response: Response) {
    try {
      const files = await Patient_Records.find();
      return response.json({
        status: 1,
        data: files,
      });
    } catch (error) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }
}
