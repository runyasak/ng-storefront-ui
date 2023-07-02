import type { Config } from 'tailwindcss';
import { tailwindConfig } from '../../packages/ng-storefront-ui/tailwind.config';

export default <Config>{
  presets: [tailwindConfig],
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    '../../packages/ng-storefront-ui/**/*.html',
    '../../packages/ng-storefront-ui/**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Text, sans-serif',
      },
    },
  },
};
