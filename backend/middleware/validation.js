

function validation(req, res, next) {
  
   const { title, priority } = req.body;

    
     if (!title || !priority) {
        return res.status(400).json({ error: "Title and priority are needed" });
    }

    if (!["low", "medium", "high"].includes(priority)) {
        return res.status(400).json({ error: "Priority must be low, medium, or high" });
    }

    next();
}


module.exports = validation;

