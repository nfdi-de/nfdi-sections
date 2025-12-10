// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import footer from './footer.config.js';
import fs from 'fs';
import path from 'path';

const announcementBarActive = true; // set to true to activate the announcement bar
let announcementBar = {};
if (announcementBarActive) {
  try {
    const abPath = path.resolve(process.cwd(), 'announcementBar.json');
    const raw = fs.readFileSync(abPath, 'utf-8').trim();
    announcementBar = raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn('announcementBar.json invalid or unreadable; skipping announcement bar:', e.message);
    announcementBar = {};
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NFDI Sections',
  tagline: 'Learn more about the NFDI sections and how you can contribute',
  favicon: 'img/nfdi_favicon.png',

  future: {
    v4: true,
  },

  // --- GitHub Pages settings ---
  // Your GitHub Pages root domain (override locally with SITE_URL)
  url: process.env.SITE_URL || 'https://nfdi-de.github.io',
  // Path under which the site is served (override locally with BASE_URL)
  baseUrl: process.env.BASE_URL || '/nfdi-sections/',

  // GitHub pages deployment config
  organizationName: 'nfdi-de',   // GitHub username or org
  projectName: 'nfdi-sections',       // Repository name
  trailingSlash: false,             // optional, but keeps cleaner URLs

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Edit links now point to your repo
          editUrl: 'https://github.com/nfdi-de/nfdi-sections/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/nfdi-de/nfdi-sections/edit/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'NFDI Logo',
          src: 'img/nfdi_logo.png',
          href: '/',
        },
        items: [
          {
            to: '/docs/nfdi-sections/intro',   // ← the “NFDI Sections” text link
            label: 'NFDI Sections',
            position: 'left',
          },
          { type: 'doc', docId: 'calendar', label: 'Calendar', position: 'left' },
          {
            type: 'doc',
            docId: 'meta/intro',
            position: 'left',
            label: 'Metadata',
          },
          { type: 'doc', docId: 'elsa/intro', label: 'ELSA', position: 'left' },
          { type: 'doc', docId: 'infra/intro', label: 'INFRA', position: 'left' },
          { type: 'doc', docId: 'edutrain/intro', label: 'EduTrain', position: 'left' },
          { type: 'doc', docId: 'industry/intro', label: 'Industry', position: 'left' },
          { type: 'doc', docId: 'internationalisation/intro', label: 'Internationalisation', position: 'left' },
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://github.com/nfdi-de/nfdi-sections',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // Add announcement bar + footer + prism theme
      ...(Object.keys(announcementBar).length > 0 && { announcementBar }),
      footer,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
     
    }),
};

export default config;
