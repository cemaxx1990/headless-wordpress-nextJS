import styled from 'styled-components';

import { MediaMediumAndAbove, Colors, FontSizes } from '../../theme';
import { Container as ContainerBase } from '../Container';

export const Root = styled.footer`
  background-color: ${Colors.gray};
  margin-top: -1px;
`;

export const Container = styled(ContainerBase)`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex-direction: column;
  gap: 2rem;

  ${MediaMediumAndAbove} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 2.5rem;
  }

  .footer {
    &__info-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__info,
    &__copyright {
      font-size: ${FontSizes.Sm};
    }

    &__copyright {
      padding-top: 2rem;
    }
  }
`;

export const FooterNavHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: .75rem;
  font-size: .75rem;
`;
