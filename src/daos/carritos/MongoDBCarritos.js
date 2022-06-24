import MongoClass from "../../contenedores/MongoClass.js";

export class MongoDBCarritos extends MongoClass{
    constructor(){
        super('productos', {
            products: {type: Array, default:[]},
        })
    }
}