import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // The migration deliberately preserves the supplied, user-facing copy.
      'react/no-unescaped-entities': 'off',
    },
  },
  globalIgnores(['.next/**', '.next-production/**', 'node_modules/**']),
]);
