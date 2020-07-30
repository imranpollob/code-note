---
title: Markdown features
emoji: 😃
tags:
  - markdown
  - cheatsheet
link: https://www.markdownguide.org/cheat-sheet/
---

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](/logo.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media


# Theme Features

> This theme adds a few additional features to standard markdown.


### Highlighting lines in code blocks

To highlight lines, wrap line with this comment before: `// highlight-start` and this after `// highlight-end`. **Ensure that these comments are not indented.**

```css
.grid {
// highlight-start
  display: grid;
  grid-gap: 30px;
// highlight-end
  grid-template-columns: repeat(auto-fill, 112px);
  /* or this */
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
}
```

## Emoji short codes

Like this: :joy: :eggplant:

```md
Like this: :joy: :eggplant:
```

## Details/Summary

<details>
  <summary>Open example</summary>

Tada! :tada:

```html
<details>
  <summary>Open example</summary>

  Tada! :tada:
</details>
```

</details>

## Tables

Tables are responsive by default. If you need to limit line length for a cell, add a `<br/>` tag to break the lines.

| Tables              | Are                                                                                 | Cool                                                      |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| This is a row       | with some                                                                           | content                                                   |
| This is another row | with a lot more content. <br/>Nullam netus eu fringilla turpis parturient dignissim | Velit ut mauris penatibus <br/>turpis commodo consectetur |

