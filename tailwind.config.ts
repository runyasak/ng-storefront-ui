import { tailwindConfig } from './projects/ng-storefront-ui/src/lib/tailwind.config';
import { Config } from 'tailwindcss';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./projects/**/*.{html,ts}'],
};
