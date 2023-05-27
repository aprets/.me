import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    CONTACT_EMAIL: z.string().email(),
  },
  client: {},
  runtimeEnv: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
});
