const { User } = require('./Models/Users');
const bcrypt = require('bcrypt');
function initialize(app){
    
    app.get('/', function(req, res){
        User.find(function(err,doc){
            res.json(doc);
        });
    });

    app.post('/register', function (req, res){
        var fecha = new Date();
        const hash = bcrypt.hashSync(req.body.password,10);
        var user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            phone: req.body.phone,
            age: req.body.age,
            gender: req.body.gender,
            hobby: req.body.hobby,
            register: fecha
        });

        user.save(function(error){
            if(error){
                console.log(error);
            }
            res.send("DATOS GUARDADOS!");
        })
    });

    app.post('/delete', function(req, res){
        User.findByIdAndDelete({_id: req.body.id}, function(error){
            if(error){
                res.json(error);
            }
            else{
                res.json({message: "OK"});
            }
        });
    });
}

exports.initialize = initialize;