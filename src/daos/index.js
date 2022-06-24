import { MongoDBProductos } from "./productos/MongoDBProductos.js";
import { MongoDBCarritos } from './carritos/MongoDBCarritos.js';
import dotenv from 'dotenv'

dotenv.config(); //inicializo la funcion donfig para poder leer el .env

export let productosDao = function(){
    switch(process.env.DB_MONGO_NAME){
        case 'mongoDB':
            return new MongoDBProductos();
        default:
            console.log('Esta base de datos no existe para este proyecto')
            break;
    }
}

export let carritosDao = function(){
    switch(process.env.DB_MONGO_NAME){
        case 'mongoDB':
            return new MongoDBCarritos();
        default:
            console.log('Esta base de datos no existe para este proyecto')
            break;
    }
}


