import express from "express";

import { getJournals, updateJournal, createJournal, deleteJournal } from "../controllers/journalController.js";

const route = express.Router();

route.get("/", getJournals);
route.post("/", updateJournal);
route.put("/:id", createJournal);
route.delete("/:id", deleteJournal);

export default route;