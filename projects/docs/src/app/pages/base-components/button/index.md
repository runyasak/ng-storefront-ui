# {{ NgDocPage.title }}

`sf-button` is an input that allows for user-triggered actions when clicked or pressed. This can be used for submitting forms, opening/closing dialogs, and much more.

## Examples

### Button sizes

`sf-button` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

{{ NgDocActions.demo("ButtonSizesExampleComponent") }}

### Button variants

`sf-button` supports 3 style variants that can be set via `variant` prop: `'primary'`, `'secondary'`, `'tertiary'`.

{{ NgDocActions.demo("ButtonVariantsExampleComponent") }}

### Button as a link

`sf-button` is a standalone directive that can be used with `button` or any other tag like link `<a>`. Also supports `RouterLink`.

{{ NgDocActions.demo("ButtonAsLinkExampleComponent") }}

## Props

| Prop name  | Type              | Default value | Possible values                          |
| ---------- | ----------------- | ------------- | ---------------------------------------- |
| `variant`  | `SfButtonVariant` | `'primary'`   | `'primary'`, `'secondary'`, `'tertiary'` |
| `size`     | `SfButtonSize`    | `'base'`      | `'sm'`, `'base'`, `'lg'`                 |
| `disabled` | `boolean`         | `false`       |                                          |
| `square`   | `boolean`         | `false`       |                                          |
| `tag`      | `string`          | `'button'`    |                                          |

## Slots

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default` | replaces the default content |
