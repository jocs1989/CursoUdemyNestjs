import * as Joi from 'joi';
import { DevEnvironmentVariables } from './schemas/env.dev.schema';
import { ProdEnvironmentVariables } from './schemas/env.prod.schema';
export function SchemaEnv(): Joi.ObjectSchema<any> {
  if (process.env.NODE_ENV === 'production') {
    console.log(`[Nest]  - [MOD PROD] Starting Nest Mode production...`);
    return Joi.object(ProdEnvironmentVariables);
  } else {
    // start mod dev
    console.log(`[Nest]  - [MOD DEV] Starting Nest Mode developer...`);
    return Joi.object(DevEnvironmentVariables);
  }
}
