import express from 'express';
import cors from 'cors';
import analyzeStringRoute from './routes/analyze-string';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/analyze-string', analyzeStringRoute);

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
});