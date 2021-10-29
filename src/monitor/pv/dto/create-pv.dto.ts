import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePvDto {
  @IsEnum(['admin', 'blog'])
  @IsNotEmpty({ message: 'type不能为空' })
  @ApiProperty()
  readonly type: 'admin' | 'blog';

  @IsString({ message: 'uid必须是 String 类型' })
  @IsNotEmpty({ message: 'uid不能为空' })
  @ApiProperty()
  readonly uid: string;

  @IsString({ message: 'ip必须是 String 类型' })
  @IsNotEmpty({ message: 'ip不能为空' })
  @ApiProperty()
  readonly ip: string;

  @IsString({ message: '地址必须是 String 类型' })
  @IsNotEmpty({ message: '地址不能为空' })
  @ApiProperty()
  readonly address: Date;

  @IsDate({ message: '开始时间必须是 Date 类型' })
  @IsNotEmpty({ message: '开始时间不能为空' })
  @ApiProperty()
  readonly startTime: Date;

  @IsNumber({}, { message: '访问时间必须是 Number 类型的时间戳' })
  @IsNotEmpty({ message: '访问时间不能为空' })
  @ApiProperty()
  readonly durationVisit: number;

  @IsString({ message: '路由路径必须是 String 类型的时间戳' })
  @IsNotEmpty({ message: '路由路径不能为空' })
  @ApiProperty()
  readonly pathname: string;
}
