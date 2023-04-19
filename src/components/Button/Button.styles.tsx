import { default as NextLink } from 'next/link';
import styled from 'styled-components';

import { Colors, Transitions } from '../../theme';

export const Button = styled.button`
  background-color: ${Colors.black};
  border: 1px solid ${Colors.black};
  color: ${Colors.white};
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: ${Transitions.allEaseInOut};

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.black};
  }
`;

export const StyledLink = styled(NextLink)`
  background-color: ${Colors.black};
  border: 0.1rem solid ${Colors.black};
  color: ${Colors.white};
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: ${Transitions.allEaseInOut};
  width: fit-content;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.black};
  }
`;

export const Link = styled(NextLink)`
  border-bottom: 1px solid ${Colors.black};
  cursor: pointer;
  word-wrap: break-word;
`;
