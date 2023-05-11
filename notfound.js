const notFoundHandler = (_req,res) =>{
  return res.status(401).json({message:"resource not found"});
}

module.exports = notFoundHandler;