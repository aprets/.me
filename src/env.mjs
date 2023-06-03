import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    CONTACT_EMAIL: z.string().email(),
    CONTACT_EMAIL_LINK: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    CONTACT_EMAIL_LINK: process.env.CONTACT_EMAIL_LINK,
  },
});
