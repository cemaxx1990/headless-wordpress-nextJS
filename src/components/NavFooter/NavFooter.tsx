import Link from 'next/link';
import { FC } from 'react';

import { Root } from './NavFooter.styles';

import { MenuItemSubset } from '../../api';

type NavProps = {
  menuItems: MenuItemSubset[];
};

export const NavFooter: FC<NavProps> = ({ menuItems }) => (
  <Root>
    {menuItems.map((item: MenuItemSubset) => (
      <Link href={item.uri || ''} key={item.uri}>
        {item.label}
      </Link>
    ))}
  </Root>
);
