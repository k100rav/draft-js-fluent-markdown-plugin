# Draft.js Fluent Markdown Plugin

Just another Draft.js markdown plugin. Online [DEMO](https://k100rav.github.io/draft-js-fluent-markdown-plugin/).

![fluent-markdown](https://user-images.githubusercontent.com/970430/50377868-5d182000-0660-11e9-9535-4636e6e2908d.gif)

## Why this fork exists?

This plugin is forked from the excellent [`draft-js-fluent-markdown-plugin`](https://github.com/makeflow/draft-js-fluent-markdown-plugin) by [makeflow](https://github.com/makeflow).

It has a single commit to make it compatible with draft-js 0.11 and React 17. This fork will be active until that support is added to the original plugin.

Changes:

- Add support for draft-js 0.11.7 and React 17.
- Based on draft-js-plugins/editor 4.1

## Features

- Common inline features like **bold**, _italic_, ~~strikethrough~~, `code`, [link](https://github.com/makeflow) and plain link https://github.com/vilic; and block features like ordered or unordered list, image block, code block, blockquote and horizontal rule.
- Carefully handled undo/redo stack, it always pushes the input before performing markdown transform.
- Reasonable character escaping support, you can safely type `**text\***` and get **text\*** without being surprised.

## Install

```sh
yarn add draft-js-fluent-markdown-plugin
```

## Usage

```tsx
import createFluentMarkdownPlugin from 'draft-js-fluent-markdown-plugin';

const PLUGINS = [createFluentMarkdownPlugin()];

<Editor
  editorState={...}
  onChange={...}
  plugins={PLUGINS}
/>
```

## License

MIT License.
