
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app",
  documents: "src/**/*.{ts,tsx}",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
