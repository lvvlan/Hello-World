/**
 * Des
 * Created by luowei5 on 2015/7/6.
 * E-mail luowei5@jd.com
 * Update 2015/7/6
 */
var userModel = require("../models/login").userList;

var userDAO = function (){};

userDAO.prototype = {
    //增
    save: function (json, callBack){
        var newUser = new userModel(json);

        newUser.save(function (err){
            callBack(err);
        });
    },
    //删
    remove: function (json, callBack){
        userModel.remove(json, function (err){
            callBack(err);
        });
    },
    //改
    update: function (json, condition, callBack){
        userModel.update(json, condition, function (err){
           callBack(err);
        });
    },
    //查
    findByName: function (name, callBack){
        userModel.findOne({username: name}, function (err, doc){
            callBack(err, doc);
        });
    }
};

//var test = new userDAO();

//test.save({username: "testVlan", password: "123456"}, function (err){
//    if(!err){
//        console.log("测试通过！");
//    }
//});

//test.update({username: "testVlan"}, {password: "74110"}, function (err){
//    if(!err){
//        console.log("测试通过！");
//    }
//});

//test.findByName("testVlan", function (err, doc){
//    if(!err){
//        console.log(doc);
//    }
//});

//test.remove({username: "testVlan"}, function (err){
//    if(!err){
//        console.log("测试通过！");
//    }
//});

exports.userMethod = new userDAO();