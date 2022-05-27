import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import {
  CONFIGURATION_SERVICE,
  ConfigurationService,
} from '../configuration/configuration-service.interface';
import { ConfigurationModule } from '../configuration/configuration.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [CONFIGURATION_SERVICE],
      useFactory: async (configurationService: ConfigurationService) => ({
        type: 'postgres',
        host: configurationService.getDatabaseHost(),
        port: configurationService.getDatabasePort(),
        username: configurationService.getDatabaseUsername(),
        password: configurationService.getDatabasePassword(),
        database: configurationService.getDatabaseName(),
        synchronize: true,
        logging: true,
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        subscribers: [],
        migrations: [],
        migrationsTableName: 'migrations',
      }),
    }),
  ],
})
export class DatabaseModule {}
