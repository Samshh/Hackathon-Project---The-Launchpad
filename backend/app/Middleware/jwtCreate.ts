import njwt from 'njwt';
import { Response, Request } from 'express';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret
export default class jwtCreate {
    
    static createJWT = (data: any, request: Request, response: Response) => {
        const claims = { sub: data };
        const token = njwt.create(claims, JWT_SECRET);
        token.setExpiration(new Date().getTime() + 60 * 60 * 1000);
        const jwt = token.compact();

        response.cookie('token', jwt, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
    }
}