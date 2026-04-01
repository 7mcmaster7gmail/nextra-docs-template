import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>S7AR Docs</span>,
  project: {
    link: 'https://github.com/7mcmaster7gmail/documentation-starter-kit',
  },
  docsRepositoryBase: 'https://github.com/7mcmaster7gmail/documentation-starter-kit/tree/main',
  footer: {
    // 这样写会带上年份和版权符号，看起来更正式
    text: `© ${new Date().getFullYear()} S7AR Docs.`,
  },
}

export default config
