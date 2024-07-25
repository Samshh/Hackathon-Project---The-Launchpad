import { Request, Response, NextFunction } from 'express';
import njwt from 'njwt';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: 0,
      message: 'Access denied. No token provided.',
    });
  }

  njwt.verify(token, JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
      return res.status(400).json({
        status: 0,
        message: 'Invalid token.',
      });
    } else {
      (req as any).user = verifiedJwt.body;
      next();
    }
  });
};

export default authenticateJWT;
