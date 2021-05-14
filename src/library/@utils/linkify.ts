import linkifyIt, {LinkifyIt} from 'linkify-it';
import tlds from 'tlds';

export interface CustomLinkifyRule {
  schema: string;
  definition: string;
}

export const linkify = (rules?: CustomLinkifyRule[]): LinkifyIt => {
  let linkify = linkifyIt().tlds(tlds);

  if (rules) {
    for (let {schema, definition} of rules) {
      linkify.add(schema, definition);
    }
  }

  return linkify;
};
