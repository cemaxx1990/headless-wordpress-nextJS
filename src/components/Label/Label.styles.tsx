import styled, { css } from 'styled-components';

import { Colors, FontSizes } from '@/theme';

export const Label = styled.label<{ filled?: boolean }>`
  position: absolute;
  font-size: 1rem;
  color: ${Colors.black};
  transition-property: top;
  transition-timing-function: ease;
  transition-duration: 100ms;
  top: 0.75rem;
  opacity: 0.5;
  pointer-events: none;
  line-height: 1;

  ${({ filled }) =>
    filled
      ? css`
          font-size: ${FontSizes.Xs};
          top: 0.5rem;
        `
      : null}
`;
