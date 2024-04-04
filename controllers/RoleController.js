const roleModel = require("../models/RoleModel");


const createroledata = async (req, res) => {

    try {

        const savedroledata = await roleModel.create(req.body);
        res.status(200).json({
            message: "Role created successfully...",
            data: savedroledata,
            flag: 1,
        });

    } catch (e) {

        res.status(500).json({
            message: "Error in server !!!",
            data: e,
            flag: -1,
        });

    }

}

const getroledata = async (req, res) => {

    try {

        const getroledata = await roleModel.find();
        res.status(200).json({
            message: "Role data got successfully",
            data: getroledata,
            flag: 1
        })


    } catch (e) {

        res.staus(500).json({
            message: "Error in server !!!",
            data: e,
            flag: -1
        })

    }


}

const deleteroledata = async (req, res) => {

    try {

        const deleteroledata = await roleModel.findByIdAndDelete(req.params.id);
        if (deleteroledata != null) {
            res.status(200).json({
                message: "Role deleted successfully...",
                data: deleteroledata,
                flag: 1

            })
        } else {

            res.status(404).json({
                message: "Role not found !!!",
            })
        }


    } catch (e) {

        res.status(500).json({

            message: "Error in server !!!",
            data: e,
            flag: -1
        })
    }

}

const updateroledata = async(req,res)=>{

    try{

        const updateroledata = await roleModel.findByIdAndUpdate(req.params.id,req.body)
        if(updateroledata != null){

            res.status(200).json({

                message:"Role updated successfully...",
                // data: updateroledata,
                flag:1
            })

        } else{

            res.status(404).json({

                message:"Role not found !!! ",
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

module.exports = {
    createroledata,
    getroledata,
    deleteroledata,
    updateroledata

}