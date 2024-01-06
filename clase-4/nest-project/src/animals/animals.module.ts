import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Likes, LikesSchema } from "./entities/likes.schema";

@Module({
  imports:[MongooseModule.forFeature([{ name: Likes.name, schema: LikesSchema }])],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
