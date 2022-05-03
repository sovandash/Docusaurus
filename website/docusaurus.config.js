// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Site',
  tagline: 'Dinosaurs are cool',
  url: 'http://localhost:3001/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img\download.jpg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        //menu1:{sidebarPath: require.resolve('./sidebars.js')},
        blog: {
          
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
   plugins:[

        
         path.join(__dirname,'/plugins/my-plugin'),

         'plugin-image-zoom',
         //'@docusaurus/theme-live-codeblock',

          [
            "@docusaurus/plugin-content-docs",
          {
            id: "ForSidebar",
            path: "ForSidebar",
            editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
            routeBasePath: "/ForSidebar",
            sidebarPath: require.resolve("./sidebarsoutside.js"),
      
          },
        ],

         [
          "@docusaurus/plugin-content-blog",
          {
            id:'blog2',
            path:'blog2',
            routeBasePath:'/blog2',

          }

         ],

    [
          "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies:
        [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: 
        [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#d14671",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#21222c",
          },
        ],
      },

        ],

    
   ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog2', label: 'Blog_2', position: 'right'},
          {to: '/ForSidebar/somefile', label: 'OuterSidebar', position: 'right'},
              {
                to: "/docs/menu1/welcome",
                label: "menu_1",
                position: "left",
                //activeBaseRegex: `/community/`,
              },
          {to: "/docs/menu2/welcome", label: "menu_2", position: "left"},
         
        
          {
            href: 'https://github.com/facebook/docusaurus',
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
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      imageZoom:{
        selector:'.markdown img',
      },
      // liveCodeBlock: {
      //   playgroundPosition: 'bottom',
      // },
    }),

  themes:['@docusaurus/theme-live-codeblock' ]

    
};


module.exports = config;
