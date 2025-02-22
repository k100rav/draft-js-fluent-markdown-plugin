import 'draft-js/dist/Draft.css';

import {EditorState, convertFromRaw} from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import React, {Component, FC, ReactNode} from 'react';
import ReactDOM from 'react-dom';

import createFluentMarkdownPlugin, {
  FluentMarkdownPluginLinkComponentProps,
} from '../bld/library';

const Link: FC<FluentMarkdownPluginLinkComponentProps> = props => {
  let href = props.href;

  return (
    <a
      href={href}
      title={href}
      onClick={(event): void => {
        if (!href.startsWith('open+')) {
          return;
        }

        event.preventDefault();

        window.open(
          href.slice(5),
          '_blank',
          'toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no',
        );
      }}
    >
      {props.children}
    </a>
  );
};

const PLUGINS = [
  createFluentMarkdownPlugin({
    indent: {tabSize: 4},
    link: {
      component: Link,
      rules: [
        {
          schema: 'open+http:',
          definition: 'http:',
        },
        {
          schema: 'open+https:',
          definition: 'https:',
        },
      ],
    },
  }),
];

const DEMO_CONTENT = convertFromRaw({
  blocks: [
    {
      key: 'efs48',
      text: 'Hello, Draft.js',
      type: 'header-one',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'evlc2',
      text: 'This is a demo for draft-js-fluent-markdown-plugin, have fun typing!',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        {
          offset: 10,
          length: 4,
          style: 'BOLD',
        },
        {
          offset: 19,
          length: 31,
          style: 'CODE',
        },
      ],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
});

interface AppProps {}

interface AppState {
  editorState: EditorState;
}

class App extends Component<AppProps, AppState> {
  state = {
    editorState: EditorState.createWithContent(DEMO_CONTENT),
  };

  render(): ReactNode {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onEditorChange}
        plugins={PLUGINS}
      />
    );
  }

  private onEditorChange = (editorState: EditorState): void => {
    this.setState({
      editorState,
    });
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
