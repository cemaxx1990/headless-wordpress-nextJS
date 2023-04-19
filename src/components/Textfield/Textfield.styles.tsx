import styled from 'styled-components';

import { Colors, FontSizes } from '../../theme';

export const Root = styled.div<{ error?: boolean }>`
  position: relative;
  background: ${Colors.white};
  border-radius: 0.25rem;
  max-height: none;
  padding-left: 1rem;
  border: 1px solid ${({ error }) => (error ? Colors.error : Colors.black)};

  &:focus-within {
    & > Label {
      top: 0.5rem !important;
      font-size: ${FontSizes.Xs} !important;
    }
  }
`;

export const TextField = styled.input`
  outline: none;
  all: unset;
  width: 100%;
  height: 100%;
  display: block;
  color: ${Colors.black};
  padding-top: 1rem;
  height: 1.5rem;
`;
