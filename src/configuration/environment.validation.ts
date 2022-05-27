import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnvironmentSchema } from './environment.schema';

export function validate(
  configuration: Record<string, unknown>,
): EnvironmentSchema {
  const result = plainToClass(EnvironmentSchema, configuration, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(result, { skipMissingProperties: true });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return result;
}
