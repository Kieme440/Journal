import Journal from "../models/Journal.js";

export async function getJournals(req, res){
    try {
        const journal = await Journal.find().sort({createdAt: 1});
        res.status(200).json(journal);
    } catch (error) {
        console.log("Not good",error)
        res.status(500).json({message:"Internal server error"})
    }
};

export async function findJournal(req, res) {
try {
    const checkJournal = await Journal.findById(req.params.id);
    res.status(200).json(checkJournal);
    if(!checkJournal) return res.status(404).json({message: "journal not found"});
} catch (error) {
    console.log("no journal found", error);
}
}

export async function createJournal(req, res){
    try {
        const { title, content } = req.body;
        const newJournal = new Journal({ title, content });
        const savedJournal = await newJournal.save();
        res.status(201).json(savedJournal);
        
    } catch (error) {
        res.status(500).json({message: "failed to create"})
        console.log("Journal failed to be created successfully", error);
    }
};

export async function updateJournal(req, res){
    try {
        const {title, content} = req.body;
        const updatedJournal = await Journal.findByIdAndUpdate(req.params.id, {title, content},
            {
                new: true,
            }
        );
        res.status(200).send(updatedJournal);

    if(!updatedJournal) return res.status(404).json({message: "journal not found"});
    } catch (error) {
                
        console.log("Journal not found", error);
    }
};

export async function deleteJournal(req, res){
    try {

        const deletedJournal = await Journal.findByIdAndDelete(req.params.id);
        if(!deletedJournal) return res.status(404).json({message: "journal not found"});
        res.status(200).json({message: "deleted Journal successfully"});
    } catch (error) {
    
    }
};
