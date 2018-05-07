import {Controller, Get, Req, Res} from "@nestjs/common";

// decorator
@Controller('Usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Adrian',
        apellido: 'Eguez',
        edad: 28
    };

    @Get('mostrar')
    mostrarUsuario(@Req() request,
                   @Res() response) {
        return response.send(this.usuario);
    }


}

