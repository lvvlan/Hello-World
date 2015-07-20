/**
 * Des
 * Created by luowei5 on 2015/7/6.
 * E-mail luowei5@jd.com
 * Update 2015/7/6
 */
var mongodb = require("./index");
var userList = require("./login").userList;

/*
* 测试数据
* */

//var userTest = new userList({
//    username: "userVlan",
//    password: "666666"
//});
//
//userTest.save();

userList.find({}, function (err, docs){
    if(!err){
        console.log(docs);
    }
});