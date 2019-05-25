var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Jobs = require('../models/jobs');
var Todos = require('../models/todos');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});

router.get('/', function(req, res, next) {
    Jobs.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message,
                result: ''
            })
        } else {
            res.json({
                status: '0',
                msg: '',
                result: doc
            })
        }
    })
})

router.post('/delivered', function(req, res, next) {
    var jobid = req.param('jobid');
    var unitid = req.param('unitid');
    var stuid = mongoose.Types.ObjectId(req.param('stuid'));
    var todo = new Todos({
        jobid: jobid,
        unitid: unitid,
        stuid: stuid
    })
    todo.save(function(err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc) {
            res.json({
                status: '0',
                msg: doc
            })
        } else {
            res.json({
                status: '1',
                msg: "没有数据"
            })
        }
    })
})

module.exports = router;
