module.exports = {
  title: 'Nop Docs',
  description: 'Documentation for Nop',
  dest: 'dist',
  themeConfig: {
    // if your docs are in a different repo from your main project:
    docsRepo: 'nop-app/docs',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // defaults to false, set to true to enable
    editLinks: true,

    nav: [
      { text: 'Nop', link: 'https://nop.is' },
      { text: 'GitHub', link: 'https://github.com/nop-app' },
    ],
    sidebar: [
      {
        title: 'Installation',
        path: '/',
        collapsable: false,
      },
      {
        title: 'Usage',
        children: [
          'usage/important-notes',
          'usage/settings',
          'usage/methods',
        ],
      },
      {
        title: 'Integrations',
        children: [
          'integrations/vue',
          'integrations/nuxt',
        ],
      },
      {
        title: 'Customize',
        path: '/customize/',
        collapsable: false,
      }
    ],
  },
}
