import { gql, GraphQLClient } from 'graphql-request';

import { Page } from '../api-schema';

export type SectionVariant = 'Content left, image right' | 'Image left, content right' | 'Text only';

export const getPageDataBySlug = async (slug: string): Promise<Page> => {
  if (!process.env.GRAPHQL_ENDPOINT) {
    Promise.reject();

    throw new Error();
  }

  const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT);

  const query = gql`
    query PageDataQuery {
      page(id: "${slug}", idType: URI) {
        id,
        title,
        heroSlider {
          images {
            sourceUrl
          }
        }
        contentModel {
          content {
            section {
              variant,
              contentLeftImageRight {
                fieldGroupName
                headline
                subline
                text
                textAlignment
                linkText
                link
                image {
                  sourceUrl
                },
              }
              imageLeftContentRight{
                fieldGroupName
                headline
                subline
                text
                textAlignment
                linkText
                link
                image {
                  sourceUrl
                },
              }
              textOnly {
                fieldGroupName
                headline
                subline
                text
                textAlignment
                linkText
                link
              }
            }
          }
        },
        seo {
          description
          keywords
          title
        },
        teamModel {
          team {
            section {
              image {
                sourceUrl
              },
              name,
              position
            }
          }
        }
      }
    }
  `;

  const response = await client.request(query);
  const pageData: Page = response.page;

  return Promise.resolve(pageData);
};
