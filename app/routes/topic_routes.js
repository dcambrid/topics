var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/topics/:id', (req, res) => {
  	const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('topics').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
  app.post('/topics', (req, res) => {
    const topic = { text: req.body.description, title: req.body.name };
    db.collection('topics').insert(topic, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.delete('/topics/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('topics').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Topic ' + id + ' deleted!');
      } 
    });
  });
  app.put('/topics/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const topic = { text: req.body.description, title: req.body.name };
    db.collection('topics').update(details, topic, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(topic);
      } 
    });
  });
};