import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo desde NestJS!';
  }

  postMetodo(obj): string {
    console.log(obj);
    
    return "devolviendo respuesta de metodo post";
  }


}
