import * as Joi from 'joi';

export const ProdEnvironmentVariables = {
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),
};
