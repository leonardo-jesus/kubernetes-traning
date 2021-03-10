const app = require('express')();

app.get('/lkp', (req, res) => {
    console.log(`Request: ${new Date.now()}`);
    res.send({ kube: 'TOP' });
});

app.listen(3000, () => {
    console.log('🚀 Running at PORT 3000');
});

