import { Router } from "express";
import { customersControllers } from "../controllers/customer-controllers";

const customerRoutes = Router();

customerRoutes.get("/profiles", customersControllers.getAllProfiles);
export default customerRoutes;

