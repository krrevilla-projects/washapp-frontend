import { Configuration, ConfigurationParameters } from "../openapi";

export const generateAPIConfig = (
  params?: ConfigurationParameters
): Configuration => {
  const config = new Configuration(params);

  return config;
};
