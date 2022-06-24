import mongoose from 'mongoose'
import config from '../config.js'

mongoose.connect(config.mongoDB.URL, config.mongoDB.options)

class MongoClass {
    constructor(collectionName, docSchema){
        this.collectionModel = mongoose.model(collectionName, docSchema)
    }
    async create(obj){
        try {
            const newDoc = await this.collectionModel.create(obj);
            return newDoc;
        } catch (error) {
            console.log("create error",error);
        }
    }
    async getAll(){
        try {
            const allDocs = await this.collectionModel.find({});
            return allDocs;
        } catch (error) {
            console.log("getAll error",error);
        }
    }
    async getById(id){
        try {
            const Doc = await this.collectionModel.find({_id:id});
            return Doc;
        } catch (error) {
            console.log("getById error",error);
        }
    }
    async deleteAll(){
        try {
            const docsBorrados = await this.collectionModel.deleteMany({})
            return docsBorrados
        } catch (error) {
            console.log("deleteAll error",error);
        }
    }
    async deleteById(id){
        try {
            const docBorrado = await this.collectionModel.deleteOne({_id:id})
            return docBorrado
        } catch (error) {
            console.log("deleteById error",error);
        }
    }
    async updateStockById(id, stock){
        try {
            const docUpdatado = await this.collectionModel.updateOne({_id:id}, {$set:{stock:stock}})
            return docUpdatado
        } catch (error) {
            console.log("updateById error",error);
        }
    }
}

export default MongoClass