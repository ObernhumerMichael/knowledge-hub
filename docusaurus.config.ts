import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { mocha, latte } from './src/theme/prism-catppuccin';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Knowledge Hub',
  tagline: 'Michaels Knowledge Hub',
  favicon: 'icons/notebook.svg',

  // Set the production url of your site here
  url: 'https://knowlege.obernhumer.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ObernhumerMichael', // Usually your GitHub org/user name.
  projectName: 'Knowledge Hub', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // enable mermaid support
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // enable math support
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Knowledge Hub',
      logo: {
        alt: 'Notebook Logo',
        src: 'icons/notebook.svg',
        srcDark: 'icons/notebook-dark.svg',
        href: 'https://knowledge.obernhumer.com',
        target: '_self',
      },
      items: [
        {
          title: "GitHub repository",
          href: 'https://github.com/ObernhumerMichael/knowledge-hub',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: false,
      }
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Michael Obernhumer Knowledge Hub. Built with Docusaurus.`,
    },
    prism: {
      theme: latte,
      darkTheme: mocha,
    },
    mermaid: {
      theme: { light: 'light', dark: 'base' },
      options: {
        themeVariables: {
          darkmode: true,
          background: '#1e1e2e',
          primaryColor: '#181825',
          primaryTextColor: '#cdd6f4',
          primaryBorderColor: '#cba6f7',
          lineColor: '#cba6f7',
          textColor: '#cdd6f4',
          tertiaryColor: '#313244',
          nodeTextColor: '#cdd6f4',
          edgeLabelBackground: '#1e1e2e',
          clusterBkg: '#313244',
          clusterBorder: '#b4befe',
          titleColor: '#cdd6f4',
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
