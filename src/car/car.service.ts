import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { getRepository, Repository } from "typeorm"
import { CarEntity } from "./entities/car.entity"
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { log } from 'console';


export interface CarRo {
  list: CarEntity[]
  count: number
}

// CRUD业务逻辑
@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>
  ) { }

  // 创建汽车
  async create(carBrand: Partial<CarEntity>): Promise<CarEntity> {
    console.log(carBrand, "接收到carBrand");
    
    return await this.carRepository.save(carBrand);
  }

  // 获取汽车列表
  async findAll(): Promise<CarRo> {

    console.log(await getRepository(CarEntity));
    // createQueryBuilder 复杂的查询
    const qb = await getRepository(CarEntity)
      .createQueryBuilder('car_entity')
      .where('1 = 1')

    
    

    // 分页
    // const {pageNum = 1, pageSize = 10, ...params} = query;
    // qb.limit(pageSize);
    // qb.offset(pageSize * (pageNum - 1));

    const cars = await qb.getMany();
    const count = await qb.getCount();

    return { list: cars, count: count };
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

}
