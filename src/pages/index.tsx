import { NextPage } from 'next';

import { getPageDataBySlug, getMenuData, MenuItemSubset } from '../api';
import { Page } from '../api-schema';
import { Layout, Slider } from '../components';

import { renderContent } from '@/helpers';

type NextPageProps = {
  legalMenuItems: MenuItemSubset[];
  mainMenuItems: MenuItemSubset[];
  pageData: Page;
};

const Home: NextPage<NextPageProps> = ({ legalMenuItems, mainMenuItems, pageData }) => (
  <Layout
    description={pageData.seo?.description}
    keywords={pageData.seo?.keywords}
    legalMenuItems={legalMenuItems}
    mainMenuItems={mainMenuItems}
    title={pageData.seo?.title}
  >
    <>
      <Slider images={pageData.heroSlider?.images} />
      {renderContent(pageData)}
    </>
  </Layout>
);

export const getStaticProps = async () => {
  const pageData: Page = await getPageDataBySlug('/');
  const mainMenuItems: MenuItemSubset[] = await getMenuData('main-menu');
  const legalMenuItems: MenuItemSubset[] = await getMenuData('legal-menu');

  return {
    props: {
      pageData,
      mainMenuItems,
      legalMenuItems,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Home;
