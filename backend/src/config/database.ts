import mongoose from 'mongoose';

export const connectDb = async (): Promise<void> => {
    const uri = process.env.CONNECT_URI;

    if (!uri) {
        console.error('❌ CONNECT_URI is not defined in environment variables');
        throw new Error('CONNECT_URI was not defined');
    }

    try {
        mongoose.set('strictQuery', true);
        
        const conn = await mongoose.connect(uri);
        
        console.log(`🔥 MongoDB conectado em: ${conn.connection.host}`);
        console.log(`📊 Database: ${conn.connection.name}`);
        
        // Event listeners para monitorar a conexão
        mongoose.connection.on('error', (err) => {
            console.error('❌ Erro no MongoDB:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('⚠️  MongoDB disconnected');
        });

        mongoose.connection.on('connected', () => {
            console.log('✅ MongoDB reconnected');
        });

    } catch (error) {
        console.error('❌ ERRO na conexão com MongoDB:');
        console.error('Detalhes do erro:', error);
        process.exit(1);
    }   
}