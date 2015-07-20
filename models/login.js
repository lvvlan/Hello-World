/**
 * Des
 * Created by luowei5 on 2015/7/6.
 * E-mail luowei5@jd.com
 * Update 2015/7/6
 */
var mongodb = require("./index");

/*
* 用户注册
* */

var Schema = mongodb.mongoose.Schema;

var registerSchema = new Schema({
    username: {type: String},
    password: {type: String},
    createTime: {type: Date, default: Date.new}
});

var userModel = mongodb.mongoose.model("blogUser", registerSchema);

exports.userList = userModel;