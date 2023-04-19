import parse, { HTMLReactParserOptions, Element, DOMNode, domToReact } from 'html-react-parser';
import { ElementType } from 'react';

import { Headline, Paragraph, Button, ButtonProps, HeadlineProps } from '@/components';

type ReplaceableTag = keyof Partial<keyof React.ElementType>;

const replaceTag: (domNode: DOMNode) => JSX.Element | void = (domNode) => {
  const componentMap: Record<ReplaceableTag, ElementType> = {
    h1: Headline,
    h2: Headline,
    h3: Headline,
    h4: Headline,
    p: Paragraph,
    a: Button,
  };

  if (domNode instanceof Element && domNode.attribs) {
    // <br />'s break SSR
    if (domNode.name === 'br') {
      return;
    }

    const isInList = Boolean(Object.keys(componentMap).includes(domNode.name));

    const fallback = domNode.name as ElementType;
    const Component: ElementType = isInList ? componentMap[domNode.name] : fallback;

    // Render tag="foo" only for above components, since it determines as what the styled component is being rendered.
    type Tag = Pick<HeadlineProps, 'tag'>;
    const showTag = isInList ? ({ tag: domNode.name } as Tag) : null;

    // Pass "renderAs" prop to Button components, to make them behave like a link
    type RenderAs = Pick<ButtonProps, 'renderAs'>;
    const renderAsLink = domNode.name === 'a' ? ({ renderAs: 'link' } as RenderAs) : null;

    const props = {
      ...showTag,
      ...renderAsLink,
      children: domToReact(domNode.children, { replace: replaceTag }),
      ...domNode.attribs,
    };

    return <Component {...props} />;
  }
};

const options: HTMLReactParserOptions = {
  replace: replaceTag,
};

export const replaceTags = (html?: string | null) => (html ? parse(html, options) : null);
