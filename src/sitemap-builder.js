const router = require('./components/App').default;
const Sitemap = require('../').default;

(
  new Sitemap(router)
  .build('https://gddevltd.co.uk')
  .save('./sitemap.xml')
);
