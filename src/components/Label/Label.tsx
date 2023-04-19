import { FC, PropsWithChildren } from 'react';

import { Label as StyledLabel } from './Label.styles';

export const Label: FC<PropsWithChildren & { filled?: boolean }> = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);
