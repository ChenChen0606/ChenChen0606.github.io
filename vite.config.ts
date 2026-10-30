import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repo is a user site (ChenChen0606.github.io), so it is served from "/".
// If you deploy to a project repo instead, change base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
