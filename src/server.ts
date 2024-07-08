import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import userRoutes from './router/userRoutes';

const app = express();
const porta = 3000;

app.use(express.json())
app.use('/users', userRoutes)

app.listen(porta, () => {
    console.log(`Server rodando porta: ${porta}`)
}  );

AppDataSource.initialize().then(async () => {
    console.log("Banco de dados rodando")

  }).catch(error => console.log(error))