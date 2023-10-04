# Ng-Storefront UI

A frontend library for Angular that helps developers quickly build fast, accessible, and beautiful storefronts.

Ng-Storefront UI is a comprehensive UI collection, built on the foundation of [Storefront UI v2](https://docs.storefrontui.io/v2/), and it provides a power of [standalone compoents](https://angular.io/guide/standalone-components) designed to simplify Angular app development. Seamlessly integrate these components into your work for an enhanced user interface experience.

# Getting started

- Installed all dependencies

```sh
pnpm add -D tailwindcss ng-storefront-ui
```

- Modify your `tailwind.config.js`

Ng-Storefront UI plugs into your Tailwind configuration, based on [Storefront UI v2](https://docs.storefrontui.io/v2/), to add any base styles and CSS variables. To do this, you need to import the Storefront UI Tailwind preset and add it to your tailwind.config.ts file.

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./src/**/*.{html,ts}', './node_modules/ng-storefront-ui/**/*.{js,mjs}'],
};
```

- To resolve warning from `"@mertasan/tailwindcss-variables" CommonJS or AMD dependencies can cause optimization bailouts`. Please add `allowedCommonJsDependencies` with depency to `angular.json`.

```json
// angular.json
{
  "architect": {
    "build": {
      // ...
      "options": {
        // ...
        "allowedCommonJsDependencies": ["@mertasan/tailwindcss-variables"]
      }
    }
  }
}
```

# @storefront-ui/typography

Ng-Storefront UI support Storefront UI Typography. You can add the Typography plugin to your project by installing it as a dependency and then adding it as a plugin in your `tailwind.config.ts` file.

```sh
pnpm add -D @storefront-ui/typography
```

```ts
// tailwind.config.ts
import sfTypography from '@storefront-ui/typography';

export default {
  //...
  plugins: [sfTypography],
};
```

# Theming

Ng-Storefront UI supports theming that adheres to the Storefront UI standard. These themes can be customized using CSS variables or Tailwind configuration, ensuring they align seamlessly with your design system. You can see more information here, [Storefront UI Theming](https://docs.storefrontui.io/v2/vue/customization/theming.html#theming).

## Customizing Colors

### CSS Variables

To customize colors with CSS variables, you can set variables as different color channels. This syntax is required for `Tailwind's opacity modifier` syntax to work.

The CSS classes for Storefront UI colors follow the pattern of `--colors-{color}-{shade}`. For example, changing `primary-500` for light/dark themes might look like this.

```css
:root {
  --colors-primary-500: 10 171 69;
}

/* this may change depending on how you implement dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --colors-primary-500: 240 253 244;
  }
}
```

### Tailwind Configuration

If you don't need to support multiple themes, or if you'd prefer to use Tailwind variants to implement your themes, you can customize Storefront UI's colors inside of your Tailwind configuration.

```ts
export default {
  //...
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f9ff',
          100: '#e9f3ff',
          200: '#c8e0ff',
          300: '#a6ccff',
          400: '#6ea1ff',
          500: '#3375ff',
          600: '#2e6ae6',
          700: '#264ebf',
          800: '#1d3f99',
          900: '#132f72',
        },
      },
    },
  },
  //...
};
```
