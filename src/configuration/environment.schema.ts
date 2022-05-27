import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Environment } from './environment.constant';
import { VariableName } from './variable-name.constant';

export class EnvironmentSchema {
  @IsEnum(Environment)
  [VariableName.NODE_ENV]: Environment;

  @IsNumber()
  [VariableName.PORT]: number;

  @IsString()
  [VariableName.DATABASE_HOST]: string;

  @IsNumber()
  @IsOptional()
  [VariableName.DATABASE_PORT]: number;

  @IsString()
  [VariableName.DATABASE_USERNAME]: string;

  @IsString()
  [VariableName.DATABASE_PASSWORD]: string;

  @IsString()
  [VariableName.DATABASE_NAME]: string;
}
