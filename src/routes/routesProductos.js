import {Router} from 'express'
import { productosDao } from '../daos/index.js';

const router = new Router();

const mongoProductos = productosDao();

router.get('/', async(req, res) =>{
    try {
        const allProducts = await mongoProductos.getAll()
        res.json(allProducts)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const prodEncontrado = await mongoProductos.getById(id);
        res.json(prodEncontrado)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const object = req.body
        const productoCreado = await mongoProductos.create(object)
        res.json(productoCreado)
    } catch (error) {
        console.log(error)
    }
} )

router.delete('/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const productoBorrado = await mongoProductos.deleteById(id)
        res.json(productoBorrado)

    } catch (error) {
        console.log(error)
    }
})

router.delete('/', async(req, res) => {
    try {
        const productosBorrados = await mongoProductos.deleteAll()
        res.json(productosBorrados)

    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { stock } = req.body;
        const productoUpdate = await mongoProductos.updateStockById(id, stock)
        res.json(productoUpdate)
    } catch (error) {
        console.log(error)
    }
})

export default router