import { error } from 'console';
import mongoose from 'mongoose';

    export const connectDb = async (): Promise<void> => {
        
        const uri = process.env.CONNECT_UR

        if (!uri){
            throw new Error('CONNECT_URI was not defined');
        }

        try{
            await mongoose.connect(process.env.CONNECT_URI!);
            console.log(`MongoDB has been connected`);
        }catch(error){
            console.log('Somethin going wrong');
            process.exit();
        }   
    }

