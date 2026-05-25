// scripts/generate-sitemap.js
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// 网站根地址（部署时的真实域名）
const BASE_URL = 'https://gsk.lisks.icu'

// 需要收录的路由列表（手动维护或从路由文件导入）
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/exam', priority: 0.8, changefreq: 'monthly' },
  { path: '/bowuzhi', priority: 0.8, changefreq: 'monthly' },
  { path: '/login', priority: 0.5, changefreq: 'yearly' },
  { path: '/register', priority: 0.5, changefreq: 'yearly' },
]

// 生成 sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

// 写入到 dist 目录（构建完成后）
const distPath = resolve(process.cwd(), 'dist')
writeFileSync(`${distPath}/sitemap.xml`, sitemap, 'utf8')
console.log('✅ sitemap.xml 已生成在 dist 目录')