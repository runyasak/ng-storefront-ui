import { tailwindConfig } from './projects/ng-storefront-ui/src/lib/tailwind.config';
import { Config } from 'tailwindcss';
import sfTypography from '@storefront-ui/typography';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./projects/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Text, sans-serif',
      },
    },
  },
  plugins: [sfTypography],
};
