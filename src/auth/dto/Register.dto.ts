import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(8)
  password: string;
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(4)
  username: string;
}
