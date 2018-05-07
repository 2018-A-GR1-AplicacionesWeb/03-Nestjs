import {Controller, Get, HttpCode, Req, Res} from "@nestjs/common";
import Status = jest.Status;

// decorator
@Controller('Usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Adrian',
        apellido: 'Eguez',
        edad: 28
    };

    @HttpCode(202)
    @Get('mostrar')
    mostrarUsuario() {
        return this.usuario;
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response
    ) {
        return response
            .status(500)
            .send(this.usuario);
    }


}

