import * as Joi from 'joi';

export const DevEnvironmentVariables = {
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),
};
