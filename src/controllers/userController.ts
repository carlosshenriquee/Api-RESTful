import { Request, Response} from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
const userRepository = AppDataSource.getRepository(User);

export const getUsers = async (req:Request, res: Response) =>{
    try {
        const users = await userRepository.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:"Erro interno do servidor", error:error.message})
    }
}

export const createUser = async (req:Request, res: Response) => {
    try {
        const {primeironome, idade} = req.body;

        const newUser = new User();
        newUser.Primeironome = primeironome;
        newUser.idade = idade;

        await userRepository.save(newUser);

        res.status(201).json({message:'Usuario criado com sucesso'})
    
    }catch (error) {
        res.status(500).json({message:"Erro interno do servidor", error:error.message})
    }
}

export const findById = async (req:Request, res: Response) => {
    try {
        const userId:number = parseInt(req.params.id,10)

        const user = await userRepository.findOneBy({
            id:userId,
        })

        if(userId){
            res.status(200).json(user)
        }else{
            res.status(404).json({message:'usuario não encontrado'})
        }
    } catch (error) {
        
    }


}