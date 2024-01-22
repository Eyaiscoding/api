import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtRequest } from "./jwt-request.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.
                fromExtractors([
                    (request: JwtRequest) => {
                        return request?.jwt;
                    },
                ]),
            ignoreExpiration: false,
            secretOrKey: Buffer.from(process.env.JWT_SECRET, 'base64').toString('utf-8')
        });
    }


    async validate(payload: any) {
        return { ...payload };
    }
}