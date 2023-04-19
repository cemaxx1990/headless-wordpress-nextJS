import styled, { css } from 'styled-components';

import { MediaSmallAndBelow, Colors, Transitions } from '../../theme';

export const Root = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  ${MediaSmallAndBelow} {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${Colors.white};
    z-index: 999;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transition: ${Transitions.allEaseInOut};
    transform: translateY(-100vh);

    &.open {
      transform: translateY(0);
    }
  }

  a {
    color: ${Colors.black};
    text-decoration: none;
    opacity: 0.7;

    &:hover {
      opacity: 0.85;
    }

    &.active {
      opacity: 1;
    }
  }

  .jobs {
    background-color: ${Colors.black};
    border: 0.1rem solid ${Colors.black};
    color: ${Colors.white};
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: ${Transitions.allEaseInOut};

    &:hover {
      background-color: ${Colors.white};
      color: ${Colors.black};
    }
  }
`;

export const BurgerIcon = styled.button<{ active: boolean }>`
  display: none;

  ${MediaSmallAndBelow} {
    display: block;
    position: relative;
    z-index: 9999;
    width: 2rem;
    height: 1rem;
    cursor: pointer;
    appearance: none;
    border: 0;
    background: transparent;
    padding: 0;

    span {
      position: absolute;
      left: 0;
      height: 0.125rem;
      width: 2rem;
      background: ${Colors.black};
      transition: ${Transitions.allEaseInOut};

      &:nth-child(1) {
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
      }

      &:nth-child(2) {
        top: 0;
      }

      &:nth-child(3) {
        bottom: 0;
      }
    }

    ${({ active }) =>
      active
        ? css`
            span:nth-child(1) {
              transform: translateY(-50%) rotate(45deg);
            }
            span:nth-child(2) {
              opacity: 0;
            }
            span:nth-child(3) {
              transform: translateY(-0.5rem) rotate(-45deg);
            }
          `
        : null}
  }
`;
