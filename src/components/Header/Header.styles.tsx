import styled, { css } from 'styled-components';

import { MediaMediumAndAbove } from '../../theme';
import { Container as ContainerBase } from '../Container';

export const Root = styled.header<{ scrolled: boolean }>`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  ${MediaMediumAndAbove} {
    ${({ scrolled }) =>
      scrolled
        ? css`
            section {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
          `
        : null}
  }

  .logo {
    height: 3rem;
    transition: all 500ms ease-in-out;

    ${MediaMediumAndAbove} {
      height: 6rem;

      ${({ scrolled }) =>
        scrolled
          ? css`
              height: 3rem;
            `
          : null}
    }

    img {
      width: auto;
      height: 100%;
    }
  }

  .mainNav {
    font-size: 20px;
    display: none;

    ${MediaMediumAndAbove} {
      display: flex;
    }
  }
`;

export const Container = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: all 500ms;
`;
