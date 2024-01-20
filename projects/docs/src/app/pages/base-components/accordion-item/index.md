# {{ NgDocPage.title }}

The `sf-accordion-item` component is a wrapper around the native `<details>` and `<summary>` HTML elements. It allows you to create an accordion component that expands and collapses content.

The root element of this component is `<details>`, and any attributes that you apply onto the `sf-accordion-item` component will be passed to the `<details>` element. The one exception is the `onToggle` attribute. The component prevents the native browser behavior and implements its own `onToggle` handler.

## Examples

### Basic Accordion

To control the state of the accordion, you can use the `ngModel` prop. This prop is a boolean that indicates whether the accordion is open or closed.

{{ NgDocActions.demo("BasicAccordionExampleComponent") }}

### Accordion Group

This example only allows one item to be open at a time.

{{ NgDocActions.demo("AccordionGroupExampleComponent") }}

## Accessibility Notes

Since `Accordion` uses `<details>` and `<summary>`` HTML elements, it inherits all of their accessibility features.

For example, `<summary>` elements are focusable and can be activated by pressing the `Enter` or `Space` keys.
