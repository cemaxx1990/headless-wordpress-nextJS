import styled, { css } from 'styled-components';

import { Breakpoints } from '../../theme';

const breakpointToPadding: Partial<Record<Breakpoints, number>> = {
  [Breakpoints.Small]: 2,
  [Breakpoints.Medium]: 3,
  [Breakpoints.Large]: 5,
};

export const Container = styled.section<{ hasPadding?: boolean }>`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: 0 auto;
  ${Object.values(Breakpoints).map(
    (val) => css`
      @media (min-width: ${val}px) {
        max-width: ${val}px;
      }
    `,
  )}

  ${({ hasPadding }) =>
    hasPadding
      ? css`
          padding-top: 2rem;
          padding-bottom: 2rem;
          ${Object.keys(breakpointToPadding).map(
            (breakpoint) => css`
              @media (min-width: ${breakpoint}px) {
                padding-top: ${breakpointToPadding[breakpoint as any as Breakpoints]}rem;
                padding-bottom: ${breakpointToPadding[breakpoint as any as Breakpoints]}rem;
              }
            `,
          )}
        `
      : null}
`;
