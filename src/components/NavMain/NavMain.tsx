import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { Root, BurgerIcon } from './NavMain.styles';

import { MenuItemSubset } from '../../api';

type NavProps = {
  menuItems: MenuItemSubset[];
};

export const NavMain: FC<NavProps> = ({ menuItems }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <Root className={`${mobileNavOpen === true ? 'open' : 'closed'}`}>
        {menuItems.map((item: MenuItemSubset, index: number) => (
          <Link
            className={`${
              (item.label && router.query.slug === item.label.toLowerCase()) || (router.pathname === '/' && index === 0)
                ? 'active'
                : ''
            }`}
            href={item.uri || ''}
            key={item.uri}
          >
            {item.label}
          </Link>
        ))}
        <Link className="jobs" href="https://flow.baucubmedia.de/mohr-bewerbung-maurer" target={'_blank'}>
          Jobs
        </Link>
      </Root>

      <BurgerIcon active={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerIcon>
    </>
  );
};
