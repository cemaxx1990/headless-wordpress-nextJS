import { LinkProps } from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

import { Button as StyledButton, Link as TextLink, StyledLink } from './Button.styles';

export type ButtonTag = 'button' | 'link' | 'styledLink';
export type ButtonStates = 'default' | 'disabled' | 'loading';

export type ButtonProps = PropsWithChildren & {
  onClick?: () => void;
  state?: ButtonStates;
} & (
    | {
        href?: never;
        renderAs?: 'button';
        type?: 'button' | 'reset' | 'submit';
      }
    | ({
        renderAs?: 'link';
        type?: never;
      } & Omit<LinkProps, 'as' | 'onMouseEnter' | 'onTouchStart'>)
    | ({
      renderAs?: 'styledLink';
      type?: never;
    } & Omit<LinkProps, 'as' | 'onMouseEnter' | 'onTouchStart'>)
  );

export const Button: FC<ButtonProps> = ({ children, onClick, state = 'default', ...props }) => {
  const Component: FC<ButtonProps> = ({ href, renderAs = 'button', ...props }) =>
    ((
      {
        link: <TextLink href={href || ''} {...props} />,
        styledLink: <StyledLink href={href || ''} {...props} />,
        button: <StyledButton {...props} />,
      } as Record<ButtonTag, React.ReactElement>
    )[renderAs]);

  return (
    <Component {...props} onClick={onClick}>
      {children}
      {state === 'loading' ? <>...</> : null}
    </Component>
  );
};
