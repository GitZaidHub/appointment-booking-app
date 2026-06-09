const db = require("../config/db");

exports.createUser = (req, res) => {

    const { name, email, phone } = req.body;

    const sql =
        "INSERT INTO users(name,email,phone) VALUES(?,?,?)";

    db.query(
        sql,
        [name, email, phone],
        (err, result) => {

            if(err){
                return res.status(500).json({
                    success:false,
                    message:err.message
                });
            }

            res.status(201).json({
                success:true,
                message:"User Added Successfully"
            });
        }
    );
};

exports.getUsers = (req, res) => {

    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {

        if(err){
            return res.status(500).json({
                success:false,
                message:err.message
            });
        }

        res.json({
            success:true,
            users:result
        });
    });
};

exports.deleteUser = (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM users WHERE id=?";

    db.query(sql, [id], (err, result) => {

        if(err){
            return res.status(500).json({
                success:false,
                message:err.message
            });
        }

        res.json({
            success:true,
            message:"User Deleted"
        });
    });
};