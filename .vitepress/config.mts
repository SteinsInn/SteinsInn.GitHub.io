import { defineConfig } from "vitepress";

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
      title: "Steins;Inn 次元旅社",
      description: "AI角色扮演 · 动漫 · 游戏 · 闲聊",

      // 这里是一个被注释掉的功能：  【base: "/",】 可以总是以斜杠结尾
      cleanUrls: true,

      head: [
        ["link", { rel: "icon", href: "/images/favicon.ico" }],
      ],

      lastUpdated: true,

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // 显示在主页右侧的logo?
        logo: '/images/r-1024x1024.png',
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
              forceLocale: true,
              },
            },
          },

          markdown: {
            image: {
              lazyLoading: true,
            }
          },

          locales: {
              // ==================== 简体中文配置 ====================
              root: {
                label: "简体中文",
                lang: "zh", 
                link: "/zh/",
                themeConfig: {
                  nav: [
                    { text: "首页", link: "/zh" },
                    { text: "指南", link: "/zh/guide" },
                    { text: "模型库", link: "/zh/features" },
                    { text: "常见问题", link: "/zh/faq" },
                    { text: "加入我们", link: "https://discord.gg/jx5Z6NfuTP" }
                  ],
                  // 以下为侧边栏内容
                  sidebar: [
                    {
                      text: "🧭 指南",
                      items: [
                        { text: "新手入门", link: "/zh/guide/getting-started" },
                        { text: "积分系统", link: "/zh/guide/points-system" },
                        { text: "任务系统", link: "/zh/guide/quest-system" },
                        { text: "社区规则", link: "/zh/guide/rules" },
                      ]
                    },
                    {
                      text: "🛠️ 功能",
                      items: [
                        { text: "AI对话", link: "/zh/features/ai-chat" },
                        { text: "图片生成", link: "/zh/features/image-gen" },
                        { text: "音乐生成", link: "/zh/features/music-gen" },
                        { text: "视频生成", link: "/zh/features/video-gen" },
                        { text: "语音合成", link: "/zh/features/tts" },
                        { text: "Role Play", link: "/zh/features/roleplay" }
                      ]
                    },
                    {
                      text: "❓ 常见问题",
                      items: [
                        { text: "FAQ", link: "/zh/faq" },
                      ]
                    }
                  ],
                  footer: {
                    message: '本文档采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
                    copyright: 'Copyright © 2026 Steins;Inn 次元旅社'
                  },
                  editLink: {
                    pattern: "https://github.com/SteinsInn/SteinsInn.GitHub.io/edit/main/:path",
                    text: "在 GitHub 上编辑本页"
                  }
                }
              },

              // ==================== 英文配置 ====================
              en: {
                label: "English",
                lang: "en",
                link: "/en/",
                themeConfig: {
                  nav: [
                    { text: "Home", link: "/en/" },
                    { text: "Join Discord", link: "https://discord.gg/jx5Z6NfuTP" }
                  ],
                  // 以下为侧边栏内容
                  sidebar: [
                    {
                      text: "🏠 Newcomer Guide",
                      items: [
                        { text: "Getting Started", link: "/en/intro" },
                        { text: "FAQ", link: "/en/faq" },
                        { text: "Points & Economy", link: "/en/economy" }
                      ]
                    },
                  ],
                  footer: {
                    message: 'Released under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
                    copyright: 'Copyright © 2026 Steins;Inn 次元旅社'
                  },
                  lastUpdated:{
                    text: 'Last update at',
                    formatOptions: {
                      dateStyle: 'full',
                      timeStyle: 'medium',
                      forceLocale: true,
                    }
                  },                  
                  editLink: {
                      pattern: "https://github.com/SteinsInn/SteinsInn.GitHub.io/edit/main/:path",
                      text: "Edit this page on GitHub"
                    }
                }
              }
            }
          });