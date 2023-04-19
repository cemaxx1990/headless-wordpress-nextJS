import styled from 'styled-components';

import { Colors, MediaMediumAndAbove, MediaLargeAndAbove, FontSizes } from '../../theme';

export const Root = styled.div`
  width: 100%;
  text-align: center;

  ${MediaMediumAndAbove} {
    width: calc(50% - 1rem);
  }

  ${MediaLargeAndAbove} {
    width: calc(33.333% - 1.5rem);
  }

`;

export const Name = styled.div`
  font-size: ${FontSizes.Lg};
  margin-bottom: .5rem;
`;

export const Position = styled.div`
  font-size: ${FontSizes.Sm};
  color: ${Colors.gray};
`;

export const Image = styled.div`
  background-color: ${Colors.gray};
  width: 100%;
  height: 26.25rem;
  margin-bottom: 1rem;
`;
