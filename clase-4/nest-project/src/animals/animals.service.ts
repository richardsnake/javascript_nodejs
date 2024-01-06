import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ILikes } from './interface/ilikes.interface';
import { LikesDTO } from './dto/likes.dto';

@Injectable()
export class AnimalsService {

  constructor(@InjectModel('Likes') private likesModel:Model<ILikes>){};


  async create(likes: LikesDTO): Promise<ILikes>{
    const like = await new this.likesModel(likes);
    return like.save();
    //return 'This action adds a new animal';
  }

  async findAll() {
    const likes = await this.likesModel.find();
    return likes;
  }

  async findOne(id: string) {
    return  await this.likesModel.findById(id);
  }

  async update(id: string, likes: LikesDTO) {
    return await this.likesModel.findByIdAndUpdate(id, likes);
  }

  async remove(id: string) {
    return await this.likesModel.findByIdAndDelete(id);
  }
}
