import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env.NEWS_API_KEY);
  return {
    plugins: [react()],
    define: {
      'process.env': env
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080/",
          changeOrigin: true
        }
      }
    }
  }
})
