import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { LikesDTO } from "./dto/likes.dto";

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  async create(@Body() like: LikesDTO) {
    return await this.animalsService.create(like);
  }

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() like: LikesDTO) {
    return this.animalsService.update(id, like);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(id);
  }
}
