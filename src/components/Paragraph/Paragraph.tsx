import React, { forwardRef, PropsWithChildren } from 'react';

import { Paragraph as StyledParagraph } from './Paragraph.styles';

export type ParagraphSize = 'tiny' | 'small' | 'large';

export type ParagraphProps = PropsWithChildren & {
  className?: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  size?: ParagraphSize;
};

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ size = 'small', ...props }, ref) => (
  <StyledParagraph size={size} {...props} ref={ref} />
));
