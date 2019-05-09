import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Animal from './models/animalModel.js';

const app = express();
const router = express.Router();
const db = mongoose.connect('mongodb://localhost/animals');
// const Animal = require ('./models/animalModel.js');
// const connection = mongoose.connection;

app.use(cors());
app.use(bodyParser.json());


router.route('/animals').get((req, res) => {
  Animal.find((err, animals) => {
    if (err) {
      return res.send(err);
    }
    return res.json(animals);
  });
});

router.route('/animals/:id').get((req, res) => {
  Animal.findById(req.params.id, (err, animal) => {
    if (err) {
      return res.send(err);
    }

    return res.json(animal);
  });
});

router.route('/animals/add').post((req, res) => {
  const animal = new Animal(req.body);
  animal.save()
    .then(result => {
      console.log(result);
      return res.status(200).json(`${animal} added successfully`);
    })
    .catch(result => {
      console.log("failed");
      return res.res.status(400).send(result);
    });
});

router.route('/animals/remove/:id').post((req, res) => {
  Animal.findByIdAndRemove(req.params.id, (err, animal) => {
    if (err) {
      return res.send(err);
    }
    console.log(`animal with id ${req.params.id} removed successfully`)
    return res.json(animal);
  });
});

app.use('/', router);

app.get('/', (req, res) => res.send('hello world'));
app.listen(4000, () => console.log('Express server running on port 4000'));