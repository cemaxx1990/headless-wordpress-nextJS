import styled from 'styled-components';

import { MediaMediumAndAbove } from '../../theme';

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

export const Form = styled.form`
  grid-column: span 3;
  ${MediaMediumAndAbove} {
    grid-column: span 2;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    align-self: flex-end;
  }

  border-radius: 0.5rem;
`;

export const Aside = styled.aside`
  grid-column: span 3;
  ${MediaMediumAndAbove} {
    grid-column: span 1;
  }
`;
