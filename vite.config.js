// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // define: {
//   //   'process.env.SOME_ENV': `"${process.env.SOME_ENV}"`,
//   //   // 'process.env.REACT_APP_SANITY_PROJECT_ID': `"${process.env.REACT_APP_SANITY_PROJECT_ID}"`,
//   //   // 'process.env.REACT_APP_SANITY_TOKEN': `"${process.env.REACT_APP_SANITY_TOKEN}"`,
//   // },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [svgr(), react()],
});
