import styled from 'styled-components';

import { Colors, FontSizes } from '../../theme';

export const Root = styled.nav`
  a {
    color: ${Colors.black};
    text-decoration: none;
    display: block;
    font-size: ${FontSizes.Sm};
    margin-bottom: .25rem;
  }
`;
