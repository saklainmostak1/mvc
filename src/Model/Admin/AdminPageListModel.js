
const connection = require('../../Config/database')
// const connection = require('../../Config/database')


const AdminPageListModel = {

    

    AdminPageListAll: async (req, res) => {
        try {
            const data = "select * from 	admin_page_list";
           
            connection.query(data, function (error, result) {
                console.log(result, 'nayan')
                if (!error) {
                    res.send(result,'nayan')
                }

                else {
                    console.log(error,'nayan')
                }

            })
        }
        catch (error) {
            console.log(error)
        }
    },
    

    AdminPageListSingle: async (req, res) => {
        try {
            const query = 'SELECT * FROM admin_page_list WHERE id = ?';
            connection.query(query, [req.params.id], (error, result) => {
                if (!error && result.length > 0) {
                    console.log(result);
                    return res.send(result);
                } else {
                    console.log(error || 'Product not found');
                    return res.status(404).json({ message: 'Product not found.' });
                }
            });
        }
        catch (error) {
            console.log(error)
        }
    },

    AdminPageListDelete: async (req, res) => {
        try {
            const query = 'DELETE FROM admin_page_list WHERE id = ?';
            connection.query(query, [req.params.id], (error, result) => {
                if (!error && result.affectedRows > 0) {
                    console.log(result);
                    return res.send(result);
                } else {
                    console.log(error || 'Product not found');
                    return res.status(404).json({ message: 'Product not found.' });
                }
            });
        }
        catch (error) {
            console.log(error)
        }
    }

}





module.exports = AdminPageListModel