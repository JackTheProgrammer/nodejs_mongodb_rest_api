let studentSchema = require("../model/student.model");
let express = require("express");
let studentRoute = express.Router();

studentRoute.route("/").get((req, res, next) => {
    studentSchema.find((err, data) => {
        if (err) {
            console.log(err.toString());
        } else {
            res.json(data);
        }
    });
});

studentRoute.route("/create-student").post((req, res) => {
    studentSchema.create(req.body, (err, data) => {
        if (err) {
            console.log(err.toString());
        } else {
            res.json(data);
        }
    });
});

studentRoute.route("/search-student/:id").get((req, res) => {
    studentSchema.findById(req.params.id, (err, data) => {
        if (err) {
            console.log(err.toString());
        } else {
            res.json(data);
        }
    });
});

studentRoute.route('/update-student/:id').put((req, res, next) => {
    studentSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Student successfully updated!')
        }
    })
});
studentRoute.route('/remove-student/:id').delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

studentRoute.route('/remove-students').delete(async (req, res, next) => {
    res.status(200).json({
        data: await studentSchema.deleteMany({}),
        message: "All data deleted"
    });
});

module.exports = studentRoute;