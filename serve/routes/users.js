var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Students = require('../models/students');
var Todos = require('../models/todos');
var Jobs = require('../models/jobs')

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');

    // Learns.find({ name: "yurui" }, function(err, doc) {
    //     if (err) {
    //         console.log(err);
    //     } else if (doc) {
    //         console.log(doc);
    //         res.json(doc);
    //     } else {
    //         console.log('null');
    //     }
    // })

    // Learns.update({ name: 'yurui' }, { '$push': { likes: '159236' } }, function(err, doc) {
    //     if (err) {
    //         console(err);
    //     }
    //     res.json(doc);
    // });

    // var doc = ({
    //     name: 'chenyilin',
    //     age: 18,
    //     school: '数据',
    //     likes: [
    //         '789654',
    //         '321654'
    //     ]
    // })
    // Learns.create(doc, function(err, doc) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.json(doc);
    // })

    // res.json({
    //     status: '0',
    //     msg: '',
    //     result: {
    //         project: '网络',
    //         grade: 90
    //     }
    // })

});

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});

router.post('/student', function(req, res, next) {

    // var docs = {
    //     "academy": req.body.academy,
    //     "school": req.body.school,
    //     "name": req.body.name,
    //     "tell": req.body.tell,
    //     "id": req.body.id,
    //     "sex": req.body.sex
    // };
    console.log(111);
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // if (req.method == "OPTIONS") res.send(200);
    // console.log(req.body);
    var docs = {
        "academy": req.param("academy"),
        "school": req.param("school"),
        "name": req.param("name"),
        "tell": req.param("tell"),
        "id": req.param("id"),
        "sex": req.param("sex"),
        "pwd": req.param("pwd")
    }
    console.log(docs);
    Students.create(docs, function(err, doc) {
        if (err) {
            res.json({
                status: "1",
                msg: err.message
            })
        } else {
            // res.header('Access-Control-Allow-Origin', '*'),
            //     res.header('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'),
            //     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"),
            //     console.log(111);
            res.json({
                status: '0',
                msg: doc
            })
        }
    })
})

router.get('/denglu', function(req, res, next) {
    var name = req.param('name');
    var pwd = req.param('pwd');
    console.log(name);
    console.log(pwd);
    Students.findOne({
        "name": name,
        "pwd": pwd
    }, function(err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc) {
            console.log(doc);
            res.json({
                status: '0',
                msg: doc
            })
        } else {
            res.json({
                status: '1',
                msg: '没有数据'
            })
        }
    })
})

router.get('/mydeliver', function(req, res, next) {
    var stuid = req.param('stuid');
    var userid = mongoose.Types.ObjectId(stuid);
    console.log(userid);
    // Todos.findOne({
    //         "stuid": userid
    //     }).populate('jobid') //加上这句话也就有了属性值,
    //     .exec(function(err, doc) {
    //             console.log('id: ', doc; res.send(doc);
    //             });
    // Todos.find({
    //         "stuid": userid
    //     }, function(err, doc) {
    //         console.log(doc);
    //     })
    // Todos.find({
    //         "stuid": stuid
    //     }).populate('jobid') //加上这句话也就有了属性值,
    //     .exec(function(err, doc) {
    //         console.log('result: ', doc);
    //         res.send(doc);
    //     });
    var arrDoc = [];
    Todos.find({
        "stuid": userid
    }, function(err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc) {
            var i;
            // for (i = 0; i < doc.length; i++) {
            Jobs.findOne({
                "_id": doc[0].jobid
            }, function(err, doc) {
                if (err) {
                    console.log(err);
                }
                if (doc) {
                    res.json({
                            status: '0',
                            msg: doc
                        })
                        // console.log(i);
                        // arrDoc.push(doc);
                        // res.json({
                        //         status: '0',
                        //         msg: doc
                        // })
                        // if (i == (doc.length - 1)) {
                        //     res.json({
                        //         status: '0',
                        //         msg: arrDoc
                        //     })
                        // }
                }
            })
        }
    })


    //     } else {
    //         res.json({
    //             status: '1',
    //             msg: 'todo没有数据'
    //         })
    //     }
    // })

})

router.get('/stu', function(req, res, next) {
    var stuid = req.param('stuid');
    Students.findOne({
        "_id": stuid
    }, function(err, doc) {
        if (doc) {
            res.json({
                status: '0',
                msg: doc
            })
        } else {
            res.json({
                status: '0',
                msg: '没有数据'
            })
        }
        if (err) {
            console.log(err);
        }
    })
})

router.post('/updatestu', function(req, res, next) {
    // var studentList = req.param('studentlist');
    // console.log(studentList);
    var studentList = req.body;
    var myWhere = { "_id": req.body._id };
    var newValue = { '$set': studentList };
    console.log(req.body._id);
    var stuid = mongoose.Types.ObjectId(req.body._id);
    Students.update(myWhere, newValue, function(err, doc) {
        if (doc) {
            console.log(doc);
            res.json({
                status: '0',
                msg: doc
            })
        }
        if (err) {
            console.log(err);
        }
    })
})

module.exports = router;
