import { tailwindConfig } from 'projects/ng-storefront-ui';
import { Config } from 'tailwindcss';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./projects/**/*.{html,ts}'],
};
