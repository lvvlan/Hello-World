var express = require('express');
var router = express.Router();

// 引入c层的各个控制器
var indexController = require("../controller/index");
var loginController = require("../controller/login");
var getLoginController = require("../controller/getLogin");

var session = require("../middleware/session");

router.use(session.session);

/* GET index page. */
router.get('/index', function(req, res, next) {
  res.render('index', indexController.index());
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {title: "用户登录"});
});

/* GET home page. */
router.get('/home', function (req, res){
    if(req.session.user){
        res.render("home", {
            title: "登录成功页",
            username:req.session.user["username"]
        });
    }else{
        req.session.error = "请先登录";
        res.redirect("login");
    }
  //res.render('home', {
  //    title: "登录成功页",
  //    username: getLoginController.userList().username
  //});
});

/*GET logout page.*/
router.get('/logout', function (req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect("/login");
});

router.get('/userData', getLoginController.getLogin);

//登录接口
router.post("/userData", loginController.login);
//注册接口
router.post("/register", loginController.register);
module.exports = router;
