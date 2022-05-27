import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { CONFIGURATION_SERVICE } from './configuration-service.interface';
import { EnvironmentConfigurationService } from './environment-configuration.service';
import { validate } from './environment.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        join(__dirname, '..', '..', `.env.stage.${process.env.NODE_ENV}`),
      ],
      validate,
    }),
  ],
  providers: [
    {
      provide: CONFIGURATION_SERVICE,
      useClass: EnvironmentConfigurationService,
    },
  ],
  exports: [CONFIGURATION_SERVICE],
})
export class ConfigurationModule {}
