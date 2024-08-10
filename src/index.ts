import express from 'express';
import cursoRoutes from './routes/cursoRoutes';
import alunoRoutes from './routes/alunoRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cursoRoutes);
app.use(alunoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

