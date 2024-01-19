import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';
import { PetsModule } from './pets/pets.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/entities/Persona.entity';
import { MongooseModule } from "@nestjs/mongoose";
import { AnimalsModule } from './animals/animals.module';
import { LikesSchema } from './animals/entities/likes.schema';
import { User } from './user/entities/User.entity';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'homestead',
      password: '1q2w3e',
      entities:[Order, Persona, User],
      database: 'postgres',
      synchronize:  true,
      logging: true
    }),
    MongooseModule.forRoot('mongodb://localhost/redes'),
    MongooseModule.forFeature([{name: 'Likes', schema: LikesSchema}]),
    PetsModule, OrdersModule, PersonaModule, AnimalsModule, UserModule, AuthModule],
  controllers: [AppController, PetsController],
  providers: [AppService, PetsService],
})
export class AppModule {}
