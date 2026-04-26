import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  // serviceDomain: 'YOUR_DOMAIN',
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  // apiKey: 'YOUR_API_KEY',
  apiKey: process.env.MICROCMS_API_KEY || '',
});