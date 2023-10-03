import express from "express";
import { ProductsController } from "../controllers/index.js";
import { checkPermission } from "../middlewares/checkPermissition.js";

const router = express.Router();

router.get('/', ProductsController.getAllproducts);

router.get('/:id', ProductsController.getOneProduct)

router.post('/add', ProductsController.addProduct)

router.put('/update/:id', ProductsController.updateProduct)

router.delete('/delete/:id', ProductsController.deleteProduct)

export default router