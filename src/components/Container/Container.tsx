import { FC, PropsWithChildren } from 'react';

import { Container as ContainerBase } from './Container.styles';

export const Container: FC<PropsWithChildren & { hasPadding?: boolean }> = ({ ...props }) => (
  <ContainerBase {...props} />
);
