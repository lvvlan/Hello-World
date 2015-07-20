/**
 * Des
 * Created by luowei5 on 2015/7/7.
 * E-mail luowei5@jd.com
 * Update 2015/7/7
 */

exports.session = function (req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = "";
    if(err){
        res.locals.message = "<div style=\"margin-bottom: 20px; color: #f00;\">"+err+"</div>"
    }
    next();
};