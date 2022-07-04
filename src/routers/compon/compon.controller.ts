import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { MyValidationPipe } from 'src/pipe/validation.pipe';
import { ComponService } from './compon.service';
import { CreateComponDto } from './dto/create-compon.dto';
import { UpdateComponDto } from './dto/update-compon.dto';

@Controller('compon')
export class ComponController {
  constructor(private readonly componService: ComponService) {}

  @UsePipes(new MyValidationPipe())
  @ApiBody({ type: CreateComponDto })
  @Post()
  create(@Body() createComponDto: CreateComponDto) {
    return this.componService.create(createComponDto);
  }

  @Get()
  findAll() {
    return this.componService.findAll();
  }

  @UsePipes(new MyValidationPipe())
  @Patch(':id')
  @ApiBody({ type: UpdateComponDto })
  update(@Param('id') id: string, @Body() updateComponDto: UpdateComponDto) {
    return this.componService.update(id, updateComponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() updateComponDto?: UpdateComponDto) {
    return this.componService.remove(id, updateComponDto);
  }
}
