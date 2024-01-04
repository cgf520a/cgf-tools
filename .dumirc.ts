import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '陈高峰',
  },
  monorepoRedirect: {
    useRootProject: true,
  },
  outputPath: 'docs-dist',
  title: '陈高峰的前端工具集',
  hash: true,
  define: {
    // 'process.env.APP_VERSION': version,
  },
  mfsu: false,
  request: {},
  plugins: [
    // require.resolve('@umijs/plugins/dist/access'),
    // require.resolve('@umijs/plugins/dist/analytics'),
    // require.resolve('@umijs/plugins/dist/antd'),
    // require.resolve('@umijs/plugins/dist/dva'),
    // require.resolve('@umijs/plugins/dist/initial-state'),
    // require.resolve('@umijs/plugins/dist/layout'),
    // require.resolve('@umijs/plugins/dist/locale'),
    // require.resolve('@umijs/plugins/dist/mf'),
    // require.resolve('@umijs/plugins/dist/model'),
    // require.resolve('@umijs/plugins/dist/moment2dayjs'),
    // require.resolve('@umijs/plugins/dist/qiankun'),
    // require.resolve('@umijs/plugins/dist/react-query'),
    require.resolve('@umijs/plugins/dist/request'),
    // require.resolve('@umijs/plugins/dist/styled-components'),
    // require.resolve('@umijs/plugins/dist/tailwindcss'),
    // require.resolve('@umijs/plugins/dist/valtio'),
    // require.resolve('./plugins/maxAlias'),
    // require.resolve('./plugins/maxAppData'),
    // require.resolve('./plugins/maxChecker'),
  ],
});
