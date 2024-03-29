//protect routes , protect resources
//we're putting the auth guard on the api gateway + hybrid microservices
import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, catchError, of, switchMap } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        @Inject('AUTH_SERVICE') private authService: ClientProxy,
    ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
       
        if (context.getType() !== 'http' ) {
            return false;
        }
        
    //jwt token = 'bearer jwt'
        const authHeader = context.switchToHttp().getRequest().headers[
            'authorization'
        ] as string ;

        if(!authHeader) return false;

        const authHeaderParts = authHeader.split(' ');

        if (authHeaderParts.length !== 2) return false;

        const [, jwt] = authHeaderParts

    // of(smth) : observables that are like promises but for strings
    //when jwt are created they return time in seconds

        return this.authService.send(
            {cmd: 'verify-jwt'}, {jwt} ).pipe(
                switchMap(( { exp }) => {
                    
                    if (!exp) return of(false)

                    const TOKEN_EXP_MS = exp * 1000

                    const isJwtValid = Date.now() < TOKEN_EXP_MS

                    return of(isJwtValid);
                    
                }),
                catchError(() => {
                    throw new UnauthorizedException();
                }),
            );
    }
  

    

}
