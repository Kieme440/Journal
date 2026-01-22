import Journal from "../models/Journal.js";

export async function getJournals(req, res){
    try {
        const journal = await Journal.find()
        res.status(200).json(journal)
    } catch (error) {
        console.log("Not good",error)
        res.status(500).json({message:"Internal server error"})
    }
};

export function updateJournal(req, res){
    res.status(200).send("updated Journals successfully");
};

export function createJournal(req, res){
    res.status(200).send("created Journals successfully");
};

export function deleteJournal(req, res){
    res.status(200).send("deleted Journal successfully");
};
