import React, { FC, PropsWithChildren } from 'react';

import { Headline as HeadlineBase } from './Headline.styles';

export type HeadlineTags = keyof Pick<keyof React.ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'>;

export type HeadlineProps = PropsWithChildren & {
  tag?: HeadlineTags;
};

export const Headline: FC<HeadlineProps> = ({ tag = 'h1', ...props }) => <HeadlineBase as={tag} tag={tag} {...props} />;
