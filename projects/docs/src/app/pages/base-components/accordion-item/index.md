# {{ NgDocPage.title }}

The `sf-accordion-item` component is a wrapper around the native `<details>` and `<summary>` HTML elements. It allows you to create an accordion component that expands and collapses content.

The root element of this component is `<details>`, and any attributes that you apply onto the `sf-accordion-item` component will be passed to the `<details>` element. The one exception is the `onToggle` attribute. The component prevents the native browser behavior and implements its own `onToggle` handler.
