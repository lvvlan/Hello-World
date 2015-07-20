/**
 * Des
 * Created by luowei5 on 2015/7/3.
 * E-mail luowei5@jd.com
 * Update 2015/7/3
 */

var userMethod = require("../dao/userDAO").userMethod;

exports.login = function (req, res){
    userMethod.findByName(req.body.username, function (err, doc){
        if(!err && doc && req.body.password === doc.password){
            var user = {
                username: req.body.username,
                password: req.body.password
            };
            req.session.user = user;
            res.send({code:200, msg:"成功（本条消息来自后台）"});
        }else{
            res.send({"code":201, msg:"用户名或者密码错误（本条消息来自后台）"});
        }
    });
    //if(req.body.username && req.body.password){
    //    res.send({code:200, msg: "登录成功（本条消息来自后台）"});
    //}else{
    //    res.send({code: 201, msg: "帐号或密码错误（本条消息来自后台）"});
    //}
};

exports.register = function (req, res){
    userMethod.findByName(req.body.username, function (err, doc){
        if(!err){
            if(!doc){
                var newUser = {username: req.body.username, password: req.body.password};
                userMethod.save(newUser, function (err){
                    if(!err){
                        res.send({
                            code: 200,
                            msg: "注册成功！（本条消息来自后台）"
                        });
                    }
                });
            }else{
                res.send({
                    code: 201,
                    msg: "次用户名已被占用！（本条消息来自后台）"
                });
            }
        }
    });
};