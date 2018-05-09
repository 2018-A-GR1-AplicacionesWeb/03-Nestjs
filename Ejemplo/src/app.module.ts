import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log.middleware";

@Module({
    imports: [ // OtrosModulos

    ],
    controllers: [ // Controladores
        AppController,
        UsuarioController,
        ParametrosController
    ],
    components: [],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewaresConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .forRoutes(
                UsuarioController,
                AppController,
                ParametrosController
            )
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }

}