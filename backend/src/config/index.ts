import dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export default {
    port: process.env.PORT,
}