import styled from 'styled-components';

import { ParagraphSize } from './Paragraph';

import { FontSizes } from '../../theme';

const sizeMap: Record<ParagraphSize, keyof typeof FontSizes> = {
  large: 'Lg',
  small: 'Base',
  tiny: 'Xs',
};

export const Paragraph = styled.p<{ size: ParagraphSize }>`
  line-height: 1.6em;
  font-size: ${({ size }) => FontSizes[sizeMap[size]]};
`;
