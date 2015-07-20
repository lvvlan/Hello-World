/**
 * Des
 * Created by luowei5 on 2015/7/6.
 * E-mail luowei5@jd.com
 * Update 2015/7/6
 */
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogData");

exports.mongoose = mongoose;

//mongoose.connection.on("error", function (error){
//    console.log("连接数据库失败"+error);
//});
//
//mongoose.connection.on("open", function (){
//    console.log("数据库连接成功！！！");
//});

//var tschema = new mongoose.Schema({
//    name  : { type:String },
//    date : {type: Date, default: Date.now}
//});
//
//var tmodel = mongoose.model("tdoc", tschema);

//var testEntity = new tmodel({
//    name: "testUser"
//});
//
//testEntity.save(function (error, doc){
//    if(error){
//        console.log("error: "+error);
//    }else{
//        console.log(doc);
//    }
//});

//tmodel.find({}, function (error, docs){
//    if(error){
//        console.log("error: "+error);
//    }else{
//        console.log(docs);
//    }
//});
//
//exports.mongoose = mongoose;
