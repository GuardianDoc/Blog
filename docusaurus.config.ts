import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JTZ',
  tagline: '',
  favicon: 'img/favicon.jpg',

  // Set the production url of your site here
  url: 'https://blog.guardian-jtz.top/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JTZ', // Usually your GitHub org/user name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'plugin-image-zoom', 
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          admonitions: {
            keywords: ['question', 'podcast', 'newsletter', 'book'],
            extendDefaults: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      title: 'JTZ',
      logo: {
        alt: 'JTZ Logo',
        src: 'img/favicon.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'penetrationSidebar',
          position: 'left',
          label: '⚔️ 渗透测试',
        },{
          type: 'docSidebar',
          sidebarId: 'blueSidebar',
          position: 'left',
          label: '🛡️ 蓝队监测',
        },{
          type: 'docSidebar',
          sidebarId: 'developSidebar',
          position: 'left',
          label: '⌨️ 开发',
        },{
          type: 'docSidebar',
          sidebarId: 'tetralogySidebar',
          position: 'left',
          label: '🎹 四部曲',
        },{
          type: 'docSidebar',
          sidebarId: 'toolsSidebar',
          position: 'left',
          label: '⚒️ Tools',
        },{
          type: 'docSidebar',
          sidebarId: 'miscSidebar',
          position: 'left',
          label: '📚 MISC',
        },{
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: '💡 Help',
        },{
          to: '/docs/tags/',
          label: '🏷️ Tags',
          position: 'right',
        },


        
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          label: 'Blog',
          position: 'right',
          items: [
            {
              to: '/docs/intro',
              label: '关于我',
            },{
              to: 'https://writeup.guardian-jtz.top/',
              label: 'WriteUP Blog',
            }
          ]
        },{
          label: 'MISC',
          position: 'right',
          items: [
            {
              href: 'https://pan.baidu.com/s/1PNvMPQsc-F70Lyk7ZNsRrA?pwd=f228',
              label: '资源',
            }
          ]
        },
        {
          href: 'https://github.com/GuardianDoc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'java',
        'bash',
        'http',
        'php',
        'PowerShell',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
