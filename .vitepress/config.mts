import { defineConfig } from "vitepress";

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
      title: "Steins;Inn 次元旅社",
      description: "AI角色扮演 · 动漫 · 游戏 · 闲聊",
      // 这里是一个被注释掉的功能：  base: "/", 可以总是以斜杠结尾
      cleanUrls: true,
      head: [
        ["link", { rel: "icon", href: "/images/favicon.ico" }],
      ],
      lastUpdated: true,
      themeConfig: {
        // 显示在主页右侧的logo?
        logo: '/images/r-1024x1024.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: "主页", link: "/" }],


        // 以下为侧边栏内容
        sidebar: {
          ["/"]: [
            { text: "返回主页", link: "/" },
            {
              text: "示例文档",
              items: [
                { text: "Markdown 示例", link: "/intro" },
              ],
            },
            { text: "立马加入 Discord！", link: "https://discord.gg/jx5Z6NfuTP" },
          ],
          ["/en/"]: [
            { text: "Back to homepage", link: "/en/" },
            {
              text: "Example docs",
              items: [
                { text: "Markdown Examples", link: "/en/markdown-examples" },
              ],
            },
            { text: "Join Discord Now!", link: "https://discord.gg/jx5Z6NfuTP" },
          ],
        },


        // 右上角的社交媒体
        socialLinks: [
          { icon: "github", link: "https://github.com/SteinsInn/SteinsInn.GitHub.io" },
          { icon: "discord", link: "https://discord.gg/jx5Z6NfuTP" },
        ],


        // 搜索功能 https://vitepress.dev/zh/reference/default-theme-search
        search: {
          provider: 'local',
          options: {
            locales: {
              root: { // 如果你想翻译默认语言，请将此处设为 `root`
                translations: {
                  button: {
                    buttonText: '搜索',
                    buttonAriaLabel: '搜索'
                  },
                  modal: {
                    displayDetails: '显示详细列表',
                    resetButtonTitle: '重置搜索',
                    backButtonTitle: '关闭搜索',
                    noResultsText: '没有结果',
                    footer: {
                      selectText: '选择',
                      selectKeyAriaLabel: '输入',
                      navigateText: '导航',
                      navigateUpKeyAriaLabel: '上箭头',
                      navigateDownKeyAriaLabel: '下箭头',
                      closeText: '关闭',
                      closeKeyAriaLabel: 'Esc'
                          }
                        }
                      }
                    }
                  }
                }
              },


        editLink: {
          pattern: "https://github.com/SteinsInn/SteinsInn.GitHub.io/edit/main/:path",
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
          themeConfig: {
            footer: {
              message: '本文档采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 许可协议',
              copyright: 'Copyright © 2026 <a href="https://github.com/SteinsInn">Steins;Inn 次元旅社</a>'
            },
          }
        },


        en: {
          label: "English",
          lang: "en",
          link: "/en/",

          title: "Steins;Inn",
          description: "AI Role Play · Anime · Game · Chat",

          themeConfig: {
            footer: {
              message: 'Released under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> License',
              copyright: 'Copyright © 2026 <a href="https://github.com/SteinsInn">Steins;Inn</a>',
                    },
              nav: [{ text: "Home", link: "/en/" }],

            lastUpdated: {
              text: "Last updated at",
              formatOptions: {
                dateStyle: "full",
                timeStyle: "full",
                // 强制使用英文区域，这样“星期日”就会变成 "Sunday"
                forceLocale: true, 
              },
            },

            editLink: {
              pattern: "https://github.com/SteinsInn/SteinsInn.GitHub.io/edit/main/:path",
              text: "Edit this page on GitHub",
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
