import {DraftDecorator} from 'draft-js';
import React, {FunctionComponent} from 'react';
import {DraftDecoratorComponentProps} from '../@utils/draft';

export function createCodeDecorator(): DraftDecorator {
  const Code: FunctionComponent<DraftDecoratorComponentProps> = ({
    children,
  }) => <code>{children}</code>;

  return {
    component: Code,
    strategy(block, callback) {
      block.findStyleRanges(metadata => metadata.hasStyle('CODE'), callback);
    },
  };
}
