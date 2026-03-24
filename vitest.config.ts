import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.vitest.spec.ts'],
    globals: true,
    environment: 'jsdom',
    pool: 'threads',
    maxWorkers: 1,
    minWorkers: 1,
    setupFiles: ['src/setup-vitest.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
});
