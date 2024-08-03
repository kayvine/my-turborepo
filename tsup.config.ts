import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: ['src/server.ts'],
  clean: true,
  minify: !options.watch,
  ...options
}));
