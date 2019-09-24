/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const extlink = require('remarkable-extlink');

// List of projects/orgs using your project for the users page.
const usersBAK = [
  {
    caption: 'Arianee',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://arianee.org',
    pinned: true,
  },
];

const users = [];

const siteConfig = {
  title: 'Arianee Docs', // Title for your website.
  tagline: 'Documentation for Arianee Protocol',
  url: 'https://arianee.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  cname : 'docs.arianee.org',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'Arianee',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://arianee.org', label: 'Arianee Home', target:'_blank'},
    {href: 'https://github.com/arianee', label: 'GitHub', target:'_blank'},    

  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.png',
  //footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#b79144',
    secondaryColor: '#000',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Arianee`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  twitterUsername: 'ArianeeProject',

  gaTrackingId: 'UA-112469684-3',

  

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
   //enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/Arianee/ArianeeMaster',

  markdownPlugins: [
      function(md) {
        extlink(md, {
          host: 'localhost', // The hrefs that you DON'T want to be external
        });
      },
    ],

};

module.exports = siteConfig;

