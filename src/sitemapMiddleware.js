import VueRouterSitemap      from 'vue-router-sitemap';
import path                  from 'path';
import { router }            from 'router';
 

export const sitemapMiddleware = () => {
  return (req, res) => {
    res.set('Content-Type', 'application/xml');
 
    const staticSitemap = path.resolve('dist/static', 'sitemap.xml');
    const filterConfig = {
      isValid: false,
      rules: [
        /\/contact/,
        /\*/,
      ],
    };
 
    new VueRouterSitemap(router).filterPaths(filterConfig).build('https://divisy.co').save(staticSitemap);
 
    return res.sendFile(staticSitemap);
  };
};
 
app.get('/sitemap.xml', sitemapMiddleware());
