import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";
import {JwtService} from "../servicios/jwt.service";

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly _jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext)
        : boolean |
        Promise<boolean> |
        Observable<boolean> {
        const request = context
            .switchToHttp()
            .getRequest();
        const jwt = request.headers.authentication;

        console.log('request.headers', request.headers);
        console.log('jwt', jwt);
        if (jwt) {
            this._jwtService
                .verificarToken(
                    jwt,
                    (error, data) => {
                        console.log('error', error);
                        console.log('data', data);
                        if (error) {
                            console.log('Existe error');
                            return false
                        } else {
                            console.log('No existe error');
                            return true
                        }
                    }
                );

        } else {
            return false;
        }

    }

}