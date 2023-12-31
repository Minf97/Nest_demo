import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('/api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) { }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }))
  body2(@Body() CreatePersonDto: CreatePersonDto, @UploadedFile() files: Array<Express.Multer.File>) {
    console.log(files);
    return `received: ${JSON.stringify(CreatePersonDto)}`
  }

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `我叫 ${name}, 今年 ${age} 岁 123`
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `received id: ${id}`
  }

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
