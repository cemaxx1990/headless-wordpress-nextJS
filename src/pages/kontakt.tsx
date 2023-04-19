import { NextPage } from 'next';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';

import { getPageDataBySlug, getMenuData, MenuItemSubset } from '../api';
import { Page } from '../api-schema';
import { Container, Layout, Form, Inputs, Slider } from '../components';

import { renderContent } from '@/helpers';

type NextPageProps = {
  legalMenuItems: MenuItemSubset[];
  mainMenuItems: MenuItemSubset[];
  pageData: Page;
};

const Home: NextPage<NextPageProps> = ({ legalMenuItems, mainMenuItems, pageData }) => {
  const sendMail = async (data: Inputs) => {
    const formdata = new FormData();

    formdata.append('your-name', data.name);
    formdata.append('your-email', data.email);
    formdata.append('your-subject', data.subject);
    formdata.append('your-message', data.message);

    const requestOptions = {
      method: 'POST',
      body: formdata,
    };

    if (!process.env.NEXT_PUBLIC_FORM_ENDPOINT) {
      throw new Error('Form endpoint missing in env');
    }

    const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, requestOptions);

    if (!response) {
      return Promise.reject();
    }

    if (response.status !== 200) {
      return Promise.reject();
    }

    const responseData = await response.json();

    if (responseData.invalid_fields.length) {
      return Promise.reject(responseData.message);
    }

    if (responseData.status !== 'mail_sent') {
      return Promise.reject(responseData.message);
    }

    return Promise.resolve();
  };

  const { mutate, ...mutationResult } = useMutation({
    mutationFn: sendMail,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data.absenden) {
      mutate(data);
    }
  };

  return (
    <Layout
      description={pageData.seo?.description}
      keywords={pageData.seo?.keywords}
      legalMenuItems={legalMenuItems}
      mainMenuItems={mainMenuItems}
      title={pageData.seo?.title}
    >
      <Slider images={pageData.heroSlider?.images} />
      <Container>
        <>
          {renderContent(pageData)}
        </>
      </Container>
      <Container hasPadding>
        <Form mutationResults={{ mutate, ...mutationResult }} onSubmit={onSubmit} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const pageData: Page = await getPageDataBySlug('kontakt/');
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
