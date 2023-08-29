const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Aserto Docs',
  titleDelimiter: ' - ',
  tagline: 'Welcome to modern authorization.',
  url: 'https://docs.aserto.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aserto-dev',
  projectName: 'aserto-docs',
  trailingSlash: false,
  plugins: [
    [
      'docusaurus2-dotenv',
      {
        path: './.env', // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/',
            from: '/',
          }
        ],
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId:
          process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID ?? '_',
      },
    ],
    [
      '@graphql-markdown/docusaurus',
      {
        schema: process.env.DIR_REPO + '/pkg/graph/schema/*.graphqls',
        rootPath: './docs/directory-api-reference',
        baseUrl: 'schema',
        linkRoot: '/docs/directory-api-reference/',
        loaders: {
          GraphQLFileLoader: '@graphql-tools/graphql-file-loader',
        },
        groupByDirective: {
          directive: 'doc',
          field: 'category',
          fallback: 'Common',
        },
        docOptions: {
          pagination: true,
          toc: false,
          index: false,
        },
      },
    ],
    '@stackql/docusaurus-plugin-hubspot',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aserto-dev/aserto-docs/edit/main/',
          routeBasePath: 'docs',
          exclude: ['docs/directory-api-reference/schema/directives/*'],
          lastVersion: 'v2',
          includeCurrentVersion: false
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      algolia: {
        apiKey: process.env.REACT_APP_ALGOLIA_API_KEY || '_',
        indexName: process.env.REACT_APP_ALGOLIA_INDEX_NAME || '_',
        appId: process.env.REACT_APP_ALGOLIA_APP_ID || '_',
        contextualSearch: false,
      },
      image: 'img/aserto-logo.png',
      navbar: {
        style: 'dark',
        logo: {
          alt: 'Aserto Logo',
          src: 'logo-header.svg',
          href: 'https://aserto.com',
          target: '_self',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            to: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'https://www.aserto.com/benefits',
            position: 'left',
            label: 'Product',
            target: '_self',
          },
          // {
          //   to: "https://www.aserto.com/playground",
          //   position: "left",
          //   label: "Playground",
          //   target: "_self",
          // },
          {
            to: 'https://www.aserto.com/blog',
            label: 'Blog',
            position: 'left',
            target: '_self',
          },
          {
            to: 'https://www.aserto.com/about',
            label: 'About',
            position: 'left',
            target: '_self',
          },
          {
            to: 'https://www.aserto.com/careers',
            label: 'Careers',
            position: 'left',
            target: '_self',
          },
          {
            to: 'https://github.com/aserto-dev/aserto-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'DEVELOPERS',
            items: [
              {
                label: 'Documentation',
                to: 'docs',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/aserto-dev',
              },
              {
                label: 'Community Slack',
                to: 'https://asertocommunity.slack.com/join/shared_invite/zt-p06gin84-xNswWpTGyPDPxCz0LMux3g#/shared-invite/email',
              },
              {
                label: 'Open Policy Containers',
                to: 'https://openpolicycontainers.com',
              },
              {
                label: 'Service Status',
                to: 'https://aserto.statuspage.io',
              },
            ],
          },
          {
            title: 'PRODUCT',
            items: [
              {
                label: 'Features',
                to: 'https://www.aserto.com/features',
              },
              {
                label: 'Benefits',
                to: 'https://www.aserto.com/benefits',
              },
              {
                label: 'Case Studies',
                to: 'https://www.aserto.com/customers',
              },
              {
                label: 'Pricing',
                to: 'https://www.aserto.com/pricing',
              },
              {
                label: 'FAQ',
                to: 'https://www.aserto.com/faq',
              },
            ],
          },
          {
            title: 'COMPANY',
            items: [
              {
                label: 'Blog',
                to: 'https://www.aserto.com/blog',
              },
              {
                label: 'About',
                to: 'https://www.aserto.com/about',
              },
              {
                label: 'Careers',
                to: 'https://www.aserto.com/careers',
              },
              {
                label: 'Press',
                to: 'https://www.aserto.com/news',
              },
              {
                label: 'Contact us',
                to: 'https://www.aserto.com/contact',
              },
            ],
          },
          {
            title: 'LEGAL',
            items: [
              {
                label: 'Terms of Service',
                to: 'https://www.aserto.com/terms-of-service',
              },
              {
                label: 'Privacy Policy',
                to: 'https://www.aserto.com/privacy-policy',
              },
            ],
          },
          {
            title: 'SOCIAL',
            items: [
              {
                html: `
                      <a href="https://twitter.com/aserto_com" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
                        <img src="/icons/twitter.svg" alt="twitter" />
                      </a>
                      <a href="https://www.linkedin.com/company/aserto-com" target="_blank" rel="noreferrer noopener" aria-label="Twitter">
                        <img style="margin-left: 24px" src="/icons/linkedin.svg" alt="linkedin" />
                      </a>
                      <a href="https://www.aserto.com/slack" target="_blank" rel="noreferrer noopener" aria-label="Slack">
                        <img style="margin-left: 24px" src="/icons/slack.svg" alt="Slack" />
                      </a>
                    `,
              },
            ],
          },
        ],
        logo: {
          alt: 'Aserto Logo',
          src: 'Aserto-logo-color-120px.png',
          href: 'https://aserto.com',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Aserto Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp', 'rego', 'ruby', 'java'],
      },
      hubspot: {
        accountId: process.env.REACT_APP_HUBSPOT_ACCOUNT_ID ?? 21300286,
      },
    },
}
