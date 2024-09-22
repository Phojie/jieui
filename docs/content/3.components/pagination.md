---
description: 'NPagination - use to divide content into pages by displaying a subset of data at a time.'
---

# 🟢 Pagination

::list{type="primary"}
- Enable quick access to first, or last page
- Enable to show edges constantly, or not
::

---

## Basic

`NPagination` - use to divide content into pages by displaying a subset of data at a time, please refer to the [radix-ui pagination](https://www.radix-vue.com/components/pagination.html#api-reference) for more api information.

| Prop           | Type      | Default | Description                                                              |
| -------------- | --------- | ------- | ------------------------------------------------------------------------ |
| `total`        | `number`  | `0`     | Number of items in your list.                                            |
| `page`         | `number`  | `-`     | The value that controls the current page and can be bound with `v-model` |
| `itemsPerPage` | `number`  | `10`    | Number of items per page.                                                |
| `disabled`     | `boolean` | `false` | Disables the pagination.                                                 |


:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationBasic.vue
::
:::

## Visibility

| Prop           | Type      | Default | Description                    |
| -------------- | --------- | ------- | ------------------------------ |
| `showFirst`    | `boolean` | `true`  | Show the first page button.    |
| `showLast`     | `boolean` | `true`  | Show the last page button.     |
| `showPrev`     | `boolean` | `true`  | Show the previous page button. |
| `showNext`     | `boolean` | `true`  | Show the next page button.     |
| `showListItem` | `boolean` | `true`  | Show the list items.           |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationComponentsVisibility
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationComponentsVisibility.vue
::
:::

## Show Edges

| Prop        | Type      | Default | Description                                                                       |
| ----------- | --------- | ------- | --------------------------------------------------------------------------------- |
| `showEdges` | `boolean` | `false` | When set to `true`, the first page, last page, and ellipsis will always be shown. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationShowEdges
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationShowEdges.vue
::
:::

## Sibling Count

| Prop           | Type     | Default | Description                                                  |
| -------------- | -------- | ------- | ------------------------------------------------------------ |
| `siblingCount` | `number` | `2`     | Number of surrounding pages to show around the current page. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationSiblingCount
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSiblingCount.vue
::
:::

## Variant and Color

| Prop                    | Type                | Default         | Description                       |
| ----------------------- | ------------------- | --------------- | --------------------------------- |
| `pagination-selected`   | `{variant}-{color}` | `solid-primary` | The color of the selected page.   |
| `pagination-unselected` | `{variant}-{color}` | `solid-white`   | The color of the unselected page. |
| `pagination-ellipsis`   | `{variant}-{color}` | `gray`          | The color of the ellipsis.        |

::alert{type="info"}
Some of `NPagination subcomponents` are wrapped around the [NButton](button) component. This means that all the props and slots of `NButton` are available. Please refer to the [Props](#props) section for more information.

::
:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationVariant.vue
::
:::

## Rounded

`rounded="{size}"` - change the border-radius of the pagination.

> 🚀 You can freely adjust the size of the rounded using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
You can use any size provided by the [Tailwind CSS](https://tailwindcss.com/docs/border-radius){target="_blank"} border-radius scale, the default is `md`. You can also add your own sizes to the scale through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationRounded
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVuePaginationRounded.vue
::
:::

## Sub Components

| Prop                    | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `_pagination-list-item` | Customizes the pagination list item component.       |
| `_pagination-prev`      | Customizes the previous page navigation button.      |
| `_pagination-next`      | Customizes the next page navigation button.          |
| `_pagination-first`     | Customizes the first page navigation button.         |
| `_pagination-last`      | Customizes the last page navigation button.          |
| `_pagination-ellipsis`  | Customizes the ellipsis indicator in the pagination. |
| `_pagination-list`      | Customizes the pagination list component.            |

::alert{type="info"}
For the sub-components props, please refer to [Props](#props) section. Refer to the [radix-ui pagination](https://www.radix-vue.com/components/pagination.html#api-reference) for more information.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationSubComponents
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSubComponents.vue
::
:::

## Slots

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationSlots
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSlots.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/pagination.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/pagination.ts

## Component

### 

:::CodeGroup
::code-block{label="Pagination" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/Pagination.vue

::
::code-block{label="PaginationEllipsis"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationEllipsis.vue

::
::code-block{label="PaginationListItem"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationListItem.vue

::
::code-block{label="PaginationFirst"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationFirst.vue

::
::code-block{label="PaginationLast"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationLast.vue

::
::code-block{label="PaginationNext"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationNext.vue

::
::code-block{label="PaginationPrev"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationPrev.vue

::
:::
