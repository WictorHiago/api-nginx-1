const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
   res.status(200).json({
      message: 'server API-NGINX-1 RODANDO NA PORTA 3000',
   });
});

app.listen(3000, () => {
   console.log('api-nginx-1 server rodando na porta 3000');
});
