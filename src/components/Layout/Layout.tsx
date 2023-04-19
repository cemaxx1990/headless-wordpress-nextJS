import { PropsWithChildren } from 'react';

import { Meta } from './Meta';

import { Header, Footer } from '../';
import { MenuItemSubset } from '../../api';

import { Page_Seo } from '@/api-schema';

type LayouProps = PropsWithChildren &
  Page_Seo & {
    legalMenuItems: MenuItemSubset[];
    mainMenuItems: MenuItemSubset[];
  };

export const Layout: React.FC<LayouProps> = ({ children, description, keywords, legalMenuItems, mainMenuItems, title }) => (
  <>
    <Meta description={description} keywords={keywords} title={title} />
    <Header menuItems={mainMenuItems} />
    {children}
    <Footer legalMenuItems={legalMenuItems} mainMenuItems={mainMenuItems} />
  </>
);
