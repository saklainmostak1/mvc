var mysql = require('mysql');



var connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'college'
});

connections.query(function (error) {
    if (!!error) {
        console.log('Connected')
      
        const data = "select * from 	student_details";
        connections.query(data, function (error, result) {
            console.log(result)
        })
    } else {
        console.log(error, 'Error')
    }
});





module.exports = connections
