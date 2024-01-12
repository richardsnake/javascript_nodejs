import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ){}

  create(createOrderDto: CreateOrderDto) {
    //return 'This action adds a new order';
    this.orderRepository.save(createOrderDto);
  }

  findAll() : Promise<Order[]>{
    return this.orderRepository.find();
  }

  findOne(id: number) : Promise<Order> {
    return this.orderRepository.findOneById(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto): string {
    this.orderRepository.update(id, updateOrderDto)
    return `This action updates a #${id} order`; 
  }

  remove(id: number) {
    this.orderRepository.delete(id);
    return `This action removes a #${id} order`;
  }
}
