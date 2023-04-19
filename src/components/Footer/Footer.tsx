import { FC } from 'react';

import { Root, Container, FooterNavHeader } from './Footer.styles';

import { NavFooter, SocialMedia, Headline } from '../';
import { MenuItemSubset } from '../../api';

type FooterProps = {
  legalMenuItems: MenuItemSubset[];
  mainMenuItems: MenuItemSubset[];
};

export const Footer: FC<FooterProps> = ({ legalMenuItems, mainMenuItems }) => {
  const today = new Date();

  return (
    <Root>
      <Container>
        <div className="footer__info-wrapper">
          <div className="footer__info">
            <Headline tag='h3'>Mohr Bauunternehmung</Headline>
            <p>Ob gewerblich oder privat- Firma Mohr weiß, worauf es beim Hochbau ankommt, und sorgt dabei für eine solide Basis im Untergrund.</p>
          </div>
          <div className="footer__copyright">Mohr Bauunternehmung © {today.getFullYear()}</div>
        </div>
        <div className="footer__nav">
          <FooterNavHeader>Menü</FooterNavHeader>
          <NavFooter menuItems={mainMenuItems} />
        </div>
        <div className="footer__social">
          <FooterNavHeader>Social Media</FooterNavHeader>
          <SocialMedia />
        </div>
        <div className="footer__legal">
          <FooterNavHeader>Rechtliches</FooterNavHeader>
          <NavFooter menuItems={legalMenuItems} />
        </div>
      </Container>
    </Root>
  );
};
