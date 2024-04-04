const subcategorymodel = require('../models/SubCategoryModel')

const createScategory = async (req, res) => {

    try {
        const saveddata = await subcategorymodel.create(req.body);
        res.status(201).json({
            message: "Create product data successful...",
            flag: 1,
            data: saveddata,
        });
    } catch (error) {
        res.status(500).json({
            message: "error to create product data !!!",
            flag: 1,
            data: error,
        });
    }
}

const getdata = async (req, res) => {
    try {
        const getdata = await subcategorymodel.find().populate('category')
        res.status(200).json({

            message: "Data Get Successful",
            data: getdata,
            flag: 1
        })
    } catch (error) {
        res.status(500).json({
            message: "Error to get data",
            data: error,
            flag: -1
        })
    }
}

const deletedata = async (req, res) => {
    try {
        const deletedata = await subcategorymodel.findByIdAndDelete(req.params.id);
        if (deletedata != null) {
            res.status(200).json({
                message: "Data Deleted Successful..",
                falg: 1,
            });
        } else {
            res.status(404).json({
                message: "Data not found !",
                flag: -1,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error to Delete SubCategory Data",
            data: error,
            flag: -1,
        });
    }
};

const updatedata = async (req, res) => {


    try {
        const updatedata = await subcategorymodel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (updatedata != null) {
            res.status(200).json({
                message: "data update Successful..",
                flag: 1,
            });
        } else {

            res.status(404).json({
                message: "Data not found !",
                flag: -1,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error to update data",
            data: error,
            flag: -1,
        });
    }
};

module.exports = {
    createScategory,
    getdata,
    deletedata,
    updatedata
}
