import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['ge', 'en'],
  defaultLocale: 'ge',
  localePrefix: 'as-needed',
  localeDetection: false
});