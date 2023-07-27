# Ng-Storefront UI (🚧🚨 Work in progress 🚨🚧)

A frontend library for Angular that helps developers quickly build fast, accessible, and beautiful storefronts.

Ng-Storefront UI is a comprehensive UI collection, built on the foundation of [Storefront UI v2](https://docs.storefrontui.io/v2/), and it provides a power of [standalone compoents](https://angular.io/guide/standalone-components) designed to simplify Angular app development. Seamlessly integrate these components into your work for an enhanced user interface experience.

# Getting started

- Installed all dependencies

```sh
npm i -D tailwindcss ng-storefront-ui
```

- Modify your `tailwind.config.js`

Ng-Storefront UI plugs into your Tailwind configuration, based on [Storefront UI v2](https://docs.storefrontui.io/v2/), to add any base styles and CSS variables. To do this, you need to import the Storefront UI Tailwind preset and add it to your tailwind.config.ts file.

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require('ng-storefront-ui');

module.exports = {
  presets: [tailwindConfig],
  content: ['./src/**/*.{html,ts}', './node_modules/ng-storefront-ui/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- To resolve warning from `"@mertasan/tailwindcss-variables" CommonJS or AMD dependencies can cause optimization bailouts`. Please add `allowedCommonJsDependencies` with depency to `angular.json`.

```
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
