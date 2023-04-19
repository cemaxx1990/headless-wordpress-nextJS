import styled, { css } from 'styled-components';

import { SectionVariant } from '../../api';
import { MediaMediumAndAbove, MediaLargeAndAbove, Colors } from '../../theme';
import { Container as ContainerBase } from '../Container';

export const Container = styled(ContainerBase)<{ variant: SectionVariant }>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'Content left, image right' ? 'column-reverse' : 'column')};
  gap: 1rem;
  border-bottom: 1px solid ${Colors.gray};

  ${MediaMediumAndAbove} {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const TextContainer = styled.div<{ textAlignment: string; variant: SectionVariant }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 150%;
  grid-column: span 12;
  text-align: ${({ textAlignment }) => (textAlignment ? textAlignment : 'left')};

  ${({ variant }) =>
    variant !== 'Text only'
      ? css`
          ${MediaMediumAndAbove} {
            grid-column: span 6;
          }
          ${MediaLargeAndAbove} {
            grid-column: span 4;
          }
        `
      : ''};
`;

export const ImageContainer = styled.div`
  grid-column: span 12;

  ${MediaMediumAndAbove} {
    grid-column: span 6;
  }
  ${MediaLargeAndAbove} {
    grid-column: span 8;
  }
  img {
    display: block;
    width: 100%;
  }
`;
