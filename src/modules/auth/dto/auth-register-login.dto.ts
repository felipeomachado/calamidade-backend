import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, Length, MinLength, Validate, min } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from 'src/utils/transformers/lower-case.transformer';
import { IsExist } from '../../../utils/validators/is-exists.validator';

export class AuthRegisterLoginDto {
  @ApiProperty({ example: 'test1@example.com' })
  @Transform(lowerCaseTransformer)
  @Validate(IsNotExist, ['User'], {
    message: 'emailAlreadyExists',
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Tony' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Stark' })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: '99999999999' })
  @Length(11)
  @Validate(IsNotExist, ['User'], {
    message: 'documentAlreadyExists',
  })
  @IsNotEmpty()
  document: string;

  @ApiProperty({ example: '99999999999' })
  @Length(11)
  @IsNotEmpty()
  telephone: string;

  @ApiProperty({ required: true, example: 123 })
  @IsInt()
  @IsNotEmpty()
  cooperatedId: number
}
