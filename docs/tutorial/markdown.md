---
title: Tutorial
sidebar_position: 100
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Showcases on formatting options with Docusarus


---

## Formatting Examples (Docusaurus)

Below are common formatting patterns you can use in docs.

### Grid: Rows and Columns

<div className="row">
  <div className="col col--6">
    <div style={{background:'#f7f7f9', padding:'0.75rem', border:'1px solid #eee'}}>
      <strong>Left column</strong>
      <p>Use the Infima grid with <code>row</code> and <code>col col--X</code> classes.</p>
    </div>
  </div>
  <div className="col col--6">
    <div style={{background:'#eef6ff', padding:'0.75rem', border:'1px solid #dbe8ff'}}>
      <strong>Right column</strong>
      <p>This column uses a soft blue background for contrast.</p>
    </div>
  </div>
  </div>

### Lists

- Unordered list item 1
- Unordered list item 2
  - Nested item

1. Ordered list item 1
2. Ordered list item 2

- [ ] Task to do
- [x] Completed task

### Table

| Feature | Supported | Notes |
|--------:|:---------:|------|
| Tables  |   Yes     | GitHub-flavored Markdown |
| Grid    |   Yes     | Use <code>row</code>/<code>col</code> classes |
| MDX     |   Yes     | Mix Markdown and JSX |

### Admonitions (Alert Boxes)

:::info
Informational callout with neutral tone.
:::

:::tip
Tips appear in a positive, success-like style.
:::

:::note
Notes are similar to info, often for references or side remarks.
:::

:::warning
Warnings highlight potential pitfalls or caveats.
:::

:::caution
Cautions draw attention to sensitive or risky actions.
:::

:::danger
Danger blocks indicate destructive or unsafe actions.
:::

### Tabs

<Tabs>
  <TabItem value="js" label="JavaScript">

```js
console.log('Hello from JS');
```

  </TabItem>
  <TabItem value="py" label="Python">

```py
print('Hello from Python')
```

  </TabItem>
</Tabs>

### Details (Collapsible)

<details>
  <summary>Click to expand details</summary>
  <p>You can hide advanced information inside a collapsible details block.</p>
</details>
