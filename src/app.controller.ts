import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloMessage } from './HelloMessage'; // Importez votre interface HelloMessage

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/:name') // Modifiez le chemin de la route pour inclure le paramètre dynamique
  getHello(@Param('name') name: string): HelloMessage {
    // Utilisez le paramètre "name" pour construire un objet HelloMessage
    const helloMessage: HelloMessage = {
      hello: `Hello, ${name}!`,
    };
    return helloMessage;
  }
}