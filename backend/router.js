import { Router } from "express";
import * as m from "./requestHandler.js";
const router=Router();
router.route("/addmenu").post(m.addMenu);
router.route("/additem").post(m.addItem);
router.route("/getmenu").get(m.getMenu);
router.route("/getitem/:menu").get(m.getItem);

export default router;