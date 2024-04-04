const categorymodel = require('../models/CategoryModel')

const createcategory = async(req,res)=>{

    try{

        const savedcategory = await categorymodel.create(req.body);

        res.status(200).json({

            message:"Category created successfully...",
            data:savedcategory,
            flag:1
        })

    }catch(e){

        res.status(500).json({

            message:"Error in server !!!",
            data:e,
            flag:-1
        })
    }
}

const getcategory =async(req,res)=>{

    try{

        const savedcategory = await categorymodel.find();
        if(savedcategory != null){

            res.status(200).json({

                message:"Fetched all categories...",
                data:savedcategory,
                flag:1
            })

        }else{

            res.status(404).json({

                message:"Category not found !!!",
                flag:-1
            })
        }


    }catch(e){

        res.status(500).json({

            message:"Error in server !!!",
            data:e,
            flag:-1
        })
    }
}

const deletecategory = async(req,res)=>{

    try{

        const deletedcategory = await categorymodel.findByIdAndDelete(req.params.id);

        if(deletedcategory != null){

            res.status(200).json({

                message:"Category deleted successfully...",
                data:deletedcategory,
                flag:1
            })

        }else{

            res.status(404).json({

                message:"Category not found !!!",
                flag:-1
            })
        }


    }catch(e){

        res.status(500).json({

            message:"Error in server !!!",
            data:e,
            flag:-1
        })
    }
}

const updatecategory = async(req,res)=>{

    try{

        const updatedcategory = await categorymodel.findByIdAndUpdate(req.params.id,req.body)

        if(updatecategory != null ){

            res.status(200).json({

                message:"Category updated successfully...",
                // data:updatedcategory,
                flag:1
            })

        }else{

            res.status(404).json({

                message:"Category not found !!!",
                flag:-1
            })
        }


    }catch(e){

        res.status(500).json({

            message:"Error in server !!!",
            data:e,
            flag:-1
        })
    }
}


module.exports={
    createcategory,
    getcategory,
    deletecategory,
    updatecategory
}