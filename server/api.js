const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

const lists = [
  {
    id: 0,
    name: 'Adaylarla ilgili teknik bir ödev hazırlanması gerekiyor.',
    priority: {
      level: 3,
      text: 'Urgent',
    },
  },
  {
    id: 1,
    name: 'Yapılan işlerle ilgili activity kayıtları oluşturmam gerekiyor.',
    priority: {
      level: 2,
      text: 'Regular',
    },
  },
  {
    id: 2,
    name: 'Teknik taskları planlayacağım',
    priority: {
      level: 1,
      text: 'Trivial',
    },
  },
];

app.get('/api/lists', function(req, res, next) {
  res.status(200).json(lists);
});

app.listen(port, () => {
  console.log(`${port} working...`);
});
