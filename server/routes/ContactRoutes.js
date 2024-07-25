import { Router } from "express";
import { searchContacts } from "../controllers/ContactsControllers.js";
import { verfiyToken } from "../middlewares/AuthMiddleware.js";

const contactsRoutes = Router();

contactsRoutes.post("/search", verfiyToken, searchContacts);

export default contactsRoutes