import MongoClass from "../../contenedores/MongoClass.js";

export class MongoDBCarritos extends MongoClass{
    constructor(){
        super('carritos', {
            products: {type: Array, default:[]},
        })
    }
}