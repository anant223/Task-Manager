const Tasks = require("../models/app");

module.exports.home = function(req, res){
    Tasks.find({}, function(err, task){
        if (err){console.log("something went wrong with DB", err); return;}
        return res.render('app', {
            title: 'To-do List',
            Tasks: task
        });
    })
};


module.exports.create = function(req, res){
    if (req.body.desc == ''){
        return res.redirect('back');
    }
    Tasks.create({
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    }, function(err, Tasks){
        if(err){console.log('ahh.. unable to bring data from database', err);return;}
    })
    return res.redirect('back');
}

module.exports.destory = function(req, res){
    console.log( req.body, "req.body");
    console.log( req.query, "req.query");

    Tasks.findByIdAndDelete(Object.keys(req.query)[3], function(err){
        if (err){
            console.log('somthing went wrong with delete func', err);
            return;
        };
        
    })
    


    
    // if (req.body.id == undefined){
    //     return res.redirect('back');
    // }
    // for (var oid in req.body.id){
        // req.body.id is an array if more then one id is selted by the user
        // it's an object if only 1 item seleted 
        // that's why used > 9 as in cawse of  1 item selected by the user then
        //req.body.id[0] will seleted the 1st digit of id 
        // which is alwasy less than 9.
    //     if (req.body.id[oid] > 9){
    //         Tasks.findByIdAndDelete(req.body.id[oid], function(err){
    //             if(err){console.log('unable to delete', err);}
    //         });

    //     }else{
    //         console.log('else part')
    //         Tasks.findByIdAndDelete(req.body.id, function(err){
    //             if (err){
    //                 console.log('Error in del from db');
    //             }
    //         })
    //     }
        
    // }
    return res.redirect('back')

};