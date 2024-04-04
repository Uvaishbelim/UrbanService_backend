const typemodel = require('../models/TypeModel')

const createtype = async (req, res) => {

    try {

        const createdata = await typemodel.create(req.body)
        res.status(201).json({
            message: "Type Created successfully..",
            data: createdata,
            flag: 1
        })

    } catch (e) {

        res.status(500).json({
            message: "Error in creating data !",
            data: e,
            flag: -1
        })

    }
}

const gettypedata = async (req, res) => {

    try {
        const getdata = await typemodel.find()
        res.status(200).json({
            message: "Data fetched successfully..",
            data: getdata,
            flag: 1
        })
    } catch (error) {
        res.status(500).json({
            message: "Error to get type data !",
            data: error,
            flag: -1
        })
    }
}

const deletetypedata = async (req, res) => {

    try {
        const deletedata = await typemodel.findByIdAndDelete(req.params.id)
        if (deletedata != null) {
            res.status(200).json({
                message: "Deleted type data successfully..",
                data: deletedata,
                flag: 1
            })
        } else {
            res.status(404).json({
                message: "Data not found !",
                data: error,
                flag: -1
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error to delete type data !",
            data: error,
            flag: -1
        })
    }
}


const updatetypedata = async (req, res) => {

    try {
        const updatedata = await typemodel.findByIdAndUpdate(req.params.id, req.body)
        if (updatedata != null) {
            res.status(200).json({
                message: "Type data updated successfully..",
                flag: 1
            })
        } else {
            res.status(404).json({
                message: "Data not found !",
                flag: -1
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error to update type data",
            data: error,
            flag: -1
        })
    }

}

module.exports = {

    createtype,
    gettypedata,
    deletetypedata,
    updatetypedata
}