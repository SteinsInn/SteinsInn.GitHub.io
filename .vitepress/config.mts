import { defineConfig } from "vitepress";

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "Steins;Inn 次元旅社",
  description: "AI角色扮演 · 动漫 · 游戏 · 闲聊",
  // base: "/", // always ends with slash | 直译： base: "/", // 总是以斜杠结尾
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "主页", link: "/" }],

    sidebar: {
      ["/"]: [
        { text: "回到主页", link: "/" },
        {
          text: "示例文档",
          items: [
            { text: "Markdown 示例", link: "/markdown-examples" },
            { text: "API 示例", link: "/api-examples" },
          ],
        },
        { text: "Discord", link: "https://discord.gg/jx5Z6NfuTP" },
      ],
      ["/en/"]: [
        { text: "Back to homepage", link: "/en/" },
        {
          text: "Example docs",
          items: [
            { text: "Markdown Examples", link: "/en/markdown-examples" },
            { text: "API Examples", link: "/en/api-examples" },
          ],
        },
        { text: "Outlink Test", link: "https://discord.gg/jx5Z6NfuTP" },
      ],
    },
    // 还需更改GitHub链接
    socialLinks: [
      { icon: "github", link: "https://github.com/Steins-Inn/Docs" },
      { icon: "discord", link: "https://discord.gg/jx5Z6NfuTP" },
    ],

    editLink: {
      pattern: "https://github.com/Steins-Inn/Docs/edit/main/:path",
      text: "在 GitHub 上编辑本页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "full",
      },
    },
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
    },
    en_us: {
      label: "English",
      lang: "en",
      link: "/en/",

      title: "Steins;Inn",
      description: "AI Role Play · Anime · Game · Chat",

      themeConfig: {
        nav: [{ text: "Home", link: "/en/" }],
    // 还需更改GitHub链接
        socialLinks: [
          { icon: "github", link: "https://github.com/Steins-Inn/Decs" },
          { icon: "discord", link: "https://discord.gg/jx5Z6NfuTP" },
        ],

        editLink: {
          pattern: "https://github.com/Steins-Inn/Docs/edit/main/:path",
          text: "Edit this page on GitHub",
        },

        lastUpdated: {
          text: "Last updated at",
          formatOptions: {
            dateStyle: "full",
            timeStyle: "full",
          },
        },
      },
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
