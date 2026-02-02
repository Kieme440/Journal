import express from "express";

import { getJournals, findJournal, createJournal, updateJournal, deleteJournal } from "../controllers/journalController.js";

const route = express.Router();

route.get("/", getJournals);
route.get("/:id", findJournal);
route.post("/", createJournal);
route.put("/:id", updateJournal);
route.delete("/:id", deleteJournal);

export default route;