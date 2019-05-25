// 对应数据库商品列表数据在resource文件夹的dumall-goods
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Jobs = require('./jobs');
var Students = require('./students');


// 定义一个Schema
var todoSchema = new Schema({
    'jobid': {
        type: Schema.Types.ObjectId,
        ref: 'jobs' //这里要写你指向的数据库表名字
    },
    'stuid': {
        type: Schema.Types.ObjectId,
        ref: 'student' //这里要写你指向的数据库表名字
    },
    'unitid': {
        type: Schema.Types.ObjectId,
        ref: 'student' //这里要写你指向的数据库表名字
    }
})

// 输出(导出)
module.exports = mongoose.model('todo', todoSchema, 'todo'); // 定义一个good商品模型，可以根据这个商品模型调用其API方法。
// 这个模型定义的是数据库dumall的goods集合数据，所以这个model取名good是对应这个集合，连接数据库之后，这个模型会根据名字的复数形式"goods"来查找数据集合。
// module.exports = mongoose.model('good',produtSchema,'goods'); 也可以后面注明链接的是数据库的goods集合
