// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require("prism-react-renderer/themes/github");
// @ts-ignore
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
    editUrl: "https://github.com/fu1996/fu1996.github.io/tree/main",
    showLastUpdateAuthor: true,
    showLastUpdateTime: true,
    breadcrumbs: false,
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "俊奎",
  tagline: "一名在大学从动物科学专业转码农的自学者",
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
  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "zh"],
      }),
    ],
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
          blogSidebarTitle: "全部博文",
          blogSidebarCount: "ALL",
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
        title: "俊奎",
        hideOnScroll: true,
        items: [
          {
            docId: "me",
            position: "left",
            label: "我和博客 📝",

            items: [
              {
                label: "大学四年",
                href: "/me",
              },
              {
                label: "博客",
                href: "/blog",
              },
            ],
          },
          {
            position: "right",
            label: "前端知识库 💡",
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
              {
                label: "React",
                to: "/react",
              },
              {
                label: "Babel 原理",
                to: "/babel",
              },
              {
                label: "Webpack 源码",
                to: "/webpack",
              },
            ],
          },
          // {
          //   position: "right",
          //   label: "框架",
          //   items: [
          //     // {
          //     //   label: "Vue",
          //     //   to: "/programming-language",
          //     // },
          //   ],
          // },
          // {
          //   position: "right",
          //   label: "工程化",
          //   items: [
          //     {
          //       label: "Webpack",
          //       to: "/webpack",
          //     },
          //     {
          //       label: "Babel",
          //       to: "/babel",
          //     },
          //   ],
          // },
          {
            position: "right",
            label: "后端知识库 📖",
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
            position: "right",
            label: "学习课件 🏫",
            items: [
              {
                label: "前端基础（老）",
                to: "/fe/index.html",
                target: "_blank",
              },
              {
                label: "Python 高级（老）",
                to: "/py/01day/01_操作系统（科普章节）.html",
                target: "_blank",
              },
              {
                label: "Flask（老）",
                to: "/flask/index.html",
                target: "_blank",
              },
              {
                label: "Django（老）",
                to: "/django/index.html",
                target: "_blank",
              },
              {
                label: "微信开发（老）",
                to: "/py-mp/index.html",
                target: "_blank",
              },
              {
                label: "Redis（老）",
                to: "/redis/index.html",
                target: "_blank",
              },
              {
                label: "Celery（老）",
                to: "/celery/index.html",
                target: "_blank",
              },
              {
                label: "Scrapy（老）",
                to: "/scrapy/index.html",
                target: "_blank",
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
