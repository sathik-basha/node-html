const express = require('express');

const app = express();

app.use(require('express-static')('./'));

app.listen(3000, function() {
  console.log('Server running on PORT 3000')
});
