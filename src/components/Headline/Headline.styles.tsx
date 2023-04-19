import styled, { css } from 'styled-components';

import { HeadlineTags } from './Headline';

import { FontSizes, Colors } from '../../theme';

export const Headline = styled.h1<{ tag: HeadlineTags }>`
  font-weight: 400;
  padding: 0;
  margin: 0;
  font-size: ${({ tag }) => ({ h1: FontSizes.Xxl, h2: FontSizes.Xl, h3: FontSizes.Lg, h4: FontSizes.Base, h5: FontSizes.Xs }[tag])};
  text-transform: ${({ tag }) => (tag === 'h5' ? 'uppercase': 'none')};
  color: ${({ tag }) => (tag === 'h5' ? Colors.gray : Colors.black)};
  margin-bottom: ${({ tag }) => (tag === 'h1' ? '1.5rem' : '1rem')};
  line-height: 120%;
  
  ${({ tag }) =>
    tag === 'h5'
        ? css`
          margin-bottom: 0;

          + h1 {
            margin-top: .5rem;
          }
          + h2 {
            margin-top: 0;
          }
        `
      : null }
`;
