/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://german-rental-project.vercel.de', // deine Domain
  generateRobotsTxt: true,                     // robots.txt automatisch erstellen
  exclude: [
    '/cms',        // keine internen CMS-Seiten
    '/api/*',      // API-Routen ausschließen
    '/admin/*'     // optional: andere interne Bereiche
  ],
  outDir: './public',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cms', '/api/*', '/admin/*']
      }
    ]
  }
}
