// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const ALL_DOS = [
  "html-css",
  "js",
  "ts",
  "babel",
  "docker",
  "git",
  "k8s",
  "linux",
  "mysql",
  "python",
  "re",
  "react",
  "webpack",
];

const getDoc = (name = "") => [
  "@docusaurus/plugin-content-docs",
  {
    id: name,
    path: name,
    routeBasePath: name,
    sidebarPath: require.resolve("./sidebars.js"),
    editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
    showLastUpdateAuthor: true,
    showLastUpdateTime: true,
    breadcrumbs: false,
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "俊奎的博客",
  tagline: "coding forever",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://fu1996.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fu1996", // Usually your GitHub org/user name.
  projectName: "fu1996.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  plugins: [
    require.resolve("plugin-image-zoom"),
    ...ALL_DOS.map((name) => getDoc(name)),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          blogSidebarCount: 7,
          blogSidebarTitle: "近期文章",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      announcementBar: {
        id: "support_us",
        content:
          '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/fu1996/fu1996.github.io">GitHub</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "俊奎的博客",
        hideOnScroll: true,
        items: [
          {
            docId: "me",
            position: "right",
            label: "关于我",

            items: [
              {
                label: "大学四年",
                href: "/me",
              },
              {
                label: "工作以来",
                href: "/blog",
              },
            ],
          },
          {
            position: "right",
            label: "前端四大件",
            items: [
              {
                label: "HTML和CSS",
                to: "/html-css",
              },
              {
                label: "JavaScript",
                to: "/js",
              },
              {
                label: "TypeScript",
                to: "/ts",
              },
            ],
          },
          {
            position: "right",
            label: "框架",
            items: [
              {
                label: "React",
                to: "/react",
              },
              // {
              //   label: "Vue",
              //   to: "/programming-language",
              // },
            ],
          },
          {
            position: "right",
            label: "工程化",
            items: [
              {
                label: "Webpack",
                to: "/webpack",
              },
              {
                label: "Babel",
                to: "/babel",
              },
            ],
          },
          {
            position: "right",
            label: "后端",
            items: [
              {
                label: "Linux",
                to: "/linux",
              },
              {
                label: "Python",
                to: "/python",
              },
              {
                label: "Mysql",
                to: "/mysql",
              },
              {
                label: "Docker",
                to: "/docker",
              },
              {
                label: "K8s",
                to: "/k8s",
              },
            ],
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/fu1996/fu1996.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      liveCodeBlock: {
        /**
         * 实时效果显示的位置，在编辑器上方还是下方。
         * 可为："top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "7F6SDFEJ79",

        // Public API key: it is safe to commit it
        apiKey: "4448ace83afe246ee7f7d48ed7cdcf7e",

        indexName: "githubBlog",
      },
    }),
};

module.exports = config;
