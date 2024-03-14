import axios from 'axios';


const api = axios.create({
  baseURL: 'https://zansap10:5002/api/v2',
  // arrumar:
  headers: {
    api_key: "{Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cG9ydGUudGlAemFuYWZsZXguY29tLmJyIiwicm9sZSI6IkFkbWluaXN0cmFkb3IiLCJ1bmlxdWVfbmFtZSI6IjE3OSIsIm5iZiI6MTcxMDE5NTMyNSwiZXhwIjoxNzEwMjE2OTI1LCJpYXQiOjE3MTAxOTUzMjV9.wEzZIBy2EUn9Tnjm3vzugOBgxzzAdAgZfwDRmEXj6Aw",
    'Cache-Control': 'no-cache', 'max-age': 30 
  }
});

export default api;