import { NextPage, GetStaticPaths } from 'next';

import { getMenuData, getPageDataBySlug, MenuItemSubset } from '../api';
import { Page as PageSchema } from '../api-schema';
import { Layout, Slider } from '../components';
import { renderContent } from '../helpers';

export const getStaticPaths: GetStaticPaths = async () => {
  const mainMenuItems: MenuItemSubset[] = await getMenuData('main-menu');
  const legalMenuItems: MenuItemSubset[] = await getMenuData('legal-menu');

  // Exclude these pages from SSG since those have custom files at /pages
  const excludePages = ['/', '/kontakt/'];
  const excludeFilter = (item: MenuItemSubset) => !item.uri || excludePages.indexOf(item.uri.toLowerCase()) === -1;
  const slugsWithoutIndexPage = mainMenuItems.filter(excludeFilter);

  const mainPaths = slugsWithoutIndexPage?.map((mainMenuItems: MenuItemSubset) => ({
    params: {
      slug: mainMenuItems.uri ? mainMenuItems.uri.replaceAll('/', '') : '',
    },
  }));

  const legalPaths = legalMenuItems?.map((legalMenuItems: MenuItemSubset) => ({
    params: {
      slug: legalMenuItems.uri ? legalMenuItems.uri.replaceAll('/', '') : '',
    },
  }));

  const paths = [...mainPaths, ...legalPaths];

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (context: any) => {
  const pageData = await getPageDataBySlug(context.params.slug);
  const mainMenuItems = await getMenuData('main-menu');
  const legalMenuItems = await getMenuData('legal-menu');

  return {
    props: {
      pageData,
      mainMenuItems,
      legalMenuItems,
    },
  };
};

type NextPageProps = {
  legalMenuItems: MenuItemSubset[];
  mainMenuItems: MenuItemSubset[];
  pageData: PageSchema;
};

const Page: NextPage<NextPageProps> = ({ legalMenuItems, mainMenuItems, pageData }) => (
  <Layout
    description={pageData?.seo?.description || ''}
    keywords={pageData?.seo?.keywords || ''}
    legalMenuItems={legalMenuItems}
    mainMenuItems={mainMenuItems}
    title={pageData?.seo?.title || ''}
  >
    <>
      <Slider images={pageData?.heroSlider?.images} />
      {renderContent(pageData)}
    </>
  </Layout>
);

// eslint-disable-next-line import/no-default-export
export default Page;
