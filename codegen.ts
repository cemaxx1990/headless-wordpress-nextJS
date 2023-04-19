import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/api-schema/schema.graphql',
  generates: {
    'src/api-schema/types.generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        scalars: {
          DateTime: 'Date',
          Decimal: 'number',
        },
        hooks: { afterAllFileWrite: '-eslint --fix' },
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
