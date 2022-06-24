import MongoClass from "../../contenedores/MongoClass.js";

export class MongoDBProductos extends MongoClass{
    constructor(){
        super('productos', {
            title: {type: String, required:true},
            description: {type: String, required:true},
            price: {type: Number, required:true},
            stock: {type:Number, default:0}
        })
    }
}