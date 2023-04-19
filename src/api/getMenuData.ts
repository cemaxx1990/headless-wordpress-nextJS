import { gql, GraphQLClient } from 'graphql-request';

import { MenuItem } from '../api-schema';

const wantedKeys = ['label', 'uri'] as const;

export type MenuItemSubset = Pick<MenuItem, (typeof wantedKeys)[number]>;

export const getMenuData = async (menu: string): Promise<MenuItemSubset[]> => {
  if (!process.env.GRAPHQL_ENDPOINT) {
    Promise.reject();

    throw new Error();
  }

  const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT);

  const query = gql`
    query MenuQUery {
      menu(id: "${menu}", idType: SLUG) {
        menuItems {
          nodes {
            ${wantedKeys.join('\n')}
          }
        }
      }
    }
  `;

  const response = await client.request(query);
  const menuItems: MenuItemSubset[] = response.menu.menuItems.nodes;

  return Promise.resolve(menuItems);
};
