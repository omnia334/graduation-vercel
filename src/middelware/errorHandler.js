module.exports = (asyncFunc)=>{
    return (req,res,next)=>{
        asyncFunc(req,res,next).catch((error)=>{
            return next(error)
        })
    }
}