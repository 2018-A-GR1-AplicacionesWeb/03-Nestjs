import {Get, Controller} from '@nestjs/common';

const fs = require("fs");

@Controller()
export class AppController {
    @Get()
    root(): string {
        console.log('1 Inicio');
        let contenidoHtml = '';
        console.log('2 contenidoHtml',contenidoHtml);
        fs.readFile(
            __dirname + '/html/Index.html',
            'utf8',
            (error, contenidoDelArchivo) => {
                console.log('3 Respondio');
                if (error) {
                    console.log('4 Error', error);
                } else {
                    contenidoHtml = contenidoDelArchivo;
                    console.log('4 contenidoHtml',contenidoHtml);
                }
            }
        );
        console.log('5 contenidoHtml',contenidoHtml);
        console.log('6 Termino');
        return contenidoHtml;
    }
}
