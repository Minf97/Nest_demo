import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { CarModule } from './car/car.module';

// import { ormconfig } from ../ormconfig.js

// const settings = require('../ormconfig.js')

@Module({
  imports: [PersonModule, CarModule, TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "qq54916",
    database: "car",
    // 手动导入实体
    // entities: [CarModule],
    // 自动导入实体
    autoLoadEntities: true,
    synchronize: false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
