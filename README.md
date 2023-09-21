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
      ...
      "options": {
        ...
        "allowedCommonJsDependencies": [
          "@mertasan/tailwindcss-variables"
        ]
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
