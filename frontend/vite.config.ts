import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   server: {
//     proxy: {
//       '/api': {
//         target: import.meta.env.VITE_CANISTER_BE_ID,
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   }
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: env.VITE_CANISTER_BE_ID,
    //       changeOrigin: true,
    //       secure: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  }
})

