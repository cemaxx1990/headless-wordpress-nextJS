import Image from 'next/image';
import Link from 'next/link';
import { FC, useState, useEffect, useCallback, useRef } from 'react';

import { Root, Container } from './Header.styles';

import companyLogo from '../../../public/mohr-logo.jpg';
import { MenuItemSubset } from '../../api';
import { NavMain } from '../NavMain';

type HeaderProps = {
  menuItems: MenuItemSubset[];
};

export const Header: FC<HeaderProps> = ({ menuItems }) => {
  const [userScrolled, setUserScrolled] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const headerElem = useRef<HTMLElement>(null);

  const SCROLL_THRESHOLD = 32;

  const onScroll = () => {
    if (window.scrollY >= SCROLL_THRESHOLD) {
      setUserScrolled(true);

      return;
    }

    setUserScrolled(false);
  };

  const updateHeaderHeightContainer = useCallback(() => {
    setHeaderHeight(headerElem.current ? headerElem.current.offsetHeight : 0);
  }, [setHeaderHeight, headerElem]);

  useEffect(() => {
    updateHeaderHeightContainer();
  }, [updateHeaderHeightContainer]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateHeaderHeightContainer);

    // Destroy eventListener when component lifecycle ends
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateHeaderHeightContainer);
    };
  });

  return (
    <>
      <Root ref={headerElem} scrolled={userScrolled}>
        <Container>
          <div className="logo"> 
            <Link href="/">
              <Image alt="Mohr Bauunternehmung Logo" priority={true} src={companyLogo} />
            </Link>
          </div>
          <NavMain menuItems={menuItems} />
        </Container>
      </Root>
      <div className="header-height-container" style={{ height: `${headerHeight}px` }}></div>
    </>
  );
};
