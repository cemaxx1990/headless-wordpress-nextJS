import { FC, PropsWithChildren } from 'react';

import { ErrorMessage as StyledErrorMessage } from './ErrorMessage.styles';

export const ErrorMessage: FC<PropsWithChildren> = ({ children, ...props }) => (
  <StyledErrorMessage {...props}>{children}</StyledErrorMessage>
);
