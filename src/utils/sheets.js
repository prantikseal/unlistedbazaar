export async function fetchStockData() {
  const SHEET_ID = '1K7FaGkK_DIWDH4jchIsmKC_57EWSCegoL7nkUqDC-B8';
  const SHEET_NAME = 'stocks';
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    const data = JSON.parse(text.substring(47).slice(0, -2));
    
    console.log('Raw Sheet Data:', data.table.rows);

    const stocks = data.table.rows.map(row => {
      if (!row.c || !Array.isArray(row.c)) {
        console.warn('Invalid row data:', row);
        return null;
      }

      const stock = {
        name: row.c[0]?.v || 'Unknown',
        price: parseFloat(row.c[1]?.v) || 0,
        thumbnail: row.c[2]?.v || '',
        logo: row.c[3]?.v || ''
      };

      console.log('Processed stock:', stock);
      return stock;
    }).filter(stock => stock !== null);

    console.log('Final processed stocks:', stocks);
    return stocks;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
} 