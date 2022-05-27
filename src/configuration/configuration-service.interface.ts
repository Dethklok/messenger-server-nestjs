export interface ConfigurationService {
  getPort(): number;
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseUsername(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
}

export const CONFIGURATION_SERVICE = 'ConfigurationService';
