import {Router} from 'express';
import { carritosDao } from '../daos/index.js';

const router = new Router();

const mongoCarritos = carritosDao();


router.get('/', async(req, res) =>{
    try {
        const allCarts = await mongoCarritos.getAll()
        res.json(allCarts)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const carritoEncontrado = await mongoCarritos.getById(id);
        res.json(carritoEncontrado)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const object = req.body
        const carritoCreado = await mongoCarritos.create(object)
        res.json(carritoCreado)
    } catch (error) {
        console.log(error)
    }
} )

router.delete('/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        const carritoBorrado = await mongoCarritos.deleteById(id)
        res.json(carritoBorrado)

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