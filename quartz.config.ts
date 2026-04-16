import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Tangible — Quartz 4 Configuration
 * Vault Obsidian publié sur /vault/ de GitHub Pages.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Tangible — Vault",
    pageTitleSuffix: " · Tangible",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "fr-FR",
    baseUrl: "tangible-app.eu/vault",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FBF8F1",
          lightgray: "#E8E2D3",
          gray: "#9C978D",
          darkgray: "#3A3E45",
          dark: "#2B2F33",
          secondary: "#E6733C",
          tertiary: "#C5582A",
          highlight: "rgba(230, 115, 60, 0.12)",
          textHighlight: "rgba(230, 115, 60, 0.28)",
        },
        darkMode: {
          light: "#1C1F24",
          lightgray: "#2B2F33",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#F5F1E8",
          secondary: "#E6733C",
          tertiary: "#FF8A4F",
          highlight: "rgba(230, 115, 60, 0.15)",
          textHighlight: "rgba(230, 115, 60, 0.35)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
