import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigurationService } from './configuration-service.interface';
import { VariableName } from './variable-name.constant';

@Injectable()
export class EnvironmentConfigurationService implements ConfigurationService {
  constructor(@Inject(ConfigService) private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get(VariableName.DATABASE_HOST);
  }

  getDatabaseName(): string {
    return this.configService.get(VariableName.DATABASE_NAME);
  }

  getDatabasePassword(): string {
    return this.configService.get(VariableName.DATABASE_PASSWORD);
  }

  getDatabasePort(): number {
    return this.configService.get(VariableName.DATABASE_PORT);
  }

  getDatabaseUsername(): string {
    return this.configService.get(VariableName.DATABASE_USERNAME);
  }

  getPort(): number {
    return this.configService.get(VariableName.PORT);
  }
}
