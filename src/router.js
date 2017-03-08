import path from 'path';
const router = (app) => {

  app.get('/', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
  });

  app.get('/add/:x/:y', (req, res) => {
    const x = req.params.x * 1;
    const y = req.params.y * 1;
    res.send({ sum: x + y });
  });

  app.post('/add', (req, res) => {
    const number1 = req.body.number1;
    const number2 = req.body.number2;
    let result = {
      result : number1 + number2
    };
    res.status(201).send(result);
  });

};

export default router;
