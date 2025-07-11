/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://noureddineazinag.com',
  generateRobotsTxt: true,
  exclude: ['/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
      },
    ],
    additionalSitemaps: [
      'https://noureddineazinag.com/sitemap.xml',
    ],
  },
};