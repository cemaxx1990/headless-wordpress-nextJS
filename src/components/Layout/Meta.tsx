import Head from 'next/head';
import { FC } from 'react';

import { Page_Seo } from '../../api-schema';

export const Meta: FC<Page_Seo> = ({ description, keywords, title }) => (
  <Head>
    <link href={`${process.env.NEXT_PUBLIC_URL || ''}/apple-touch-icon.png`} rel="apple-touch-icon" sizes="180x180" />
    <link href={`${process.env.NEXT_PUBLIC_URL || ''}/favicon-32x32.png`} rel="icon" sizes="32x32" type="image/png" />
    <link href={`${process.env.NEXT_PUBLIC_URL || ''}/favicon-16x16.png`} rel="icon" sizes="16x16" type="image/png" />
    <link href={`${process.env.NEXT_PUBLIC_URL || ''}/site.webmanifest`} rel="manifest" />
    <meta content="#ffffff" name="msapplication-TileColor" />
    <meta content="#ffffff" name="theme-color" />
    
    <title>{title}</title>
    <meta content={keywords || ''} name="keywords" />
    <meta content={description || ''} name="description" />

    <meta content={title || ''} property="og:title" />
    <meta content={description || ''} property="og:description" />
    <meta content={`${process.env.NEXT_PUBLIC_URL || ''}/open-graph.jpg`} property="og:image" />  
    <meta content="website" property="og:type" />

    <meta content={title || ''} property="twitter:title" />
    <meta content={description || ''} property="twitter:description" />
    <meta content={`${process.env.NEXT_PUBLIC_URL || ''}/open-graph.jpg`} property="twitter:image" />
    <meta content="summary_large_image" name="twitter:card" />
  </Head>
);
