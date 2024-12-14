export default async function sitemap() {
  const baseUrl = 'https://unlistedbazaar.com';

  // Get stock data for dynamic routes
  const stocks = await fetch('https://docs.google.com/spreadsheets/d/1K7FaGkK_DIWDH4jchIsmKC_57EWSCegoL7nkUqDC-B8/gviz/tq?tqx=out:json&sheet=stocks')
    .then(res => res.text())
    .then(text => JSON.parse(text.substring(47).slice(0, -2)))
    .then(data => data.table.rows.map(row => ({
      name: row.c[0].v
    })))
    .catch(() => []);

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Add dynamic stock routes
  const stockRoutes = stocks.map(stock => ({
    url: `${baseUrl}/stocks/${stock.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  return [...routes, ...stockRoutes];
} 