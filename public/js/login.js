/**
 * Des
 * Created by luowei5 on 2015/7/3.
 * E-mail luowei5@jd.com
 * Update 2015/7/3
 */

;(function ($){
    var foo = function (options){
        var self = this;
            self.options = $.extend({
                parent: $("#myForm"),
                register: $("[node-type=register]"),
                submit: $("[node-type=submit]")
            }, options);
        self.bindEvent();
    };

    foo.prototype = {
        bindEvent: function (){
            var self = this;
            self.login();
            self.register();
        },
        login: function (){
            var self = this,
                parent = self.options.parent,
                submit = self.options.submit;

            submit.on("click", function (){
                var jqXML = $.ajax({
                    url: "/userData",
                    dataType: "json",
                    type: "post",
                    data: parent.serialize()
                });

                jqXML.done(function (json){
                    if(json.code == 200){
                        location.href = "/home";
                    }else{
                        alert(json.msg);
                    }
                });
            });
        },
        register: function (){
            var self = this,
                parent = self.options.parent,
                register = self.options.register;

            register.on("click", function (){
                var jqXML = $.ajax({
                    url: "/register",
                    dataType: "json",
                    type: "post",
                    data: parent.serialize()
                });

                jqXML.done(function (json){
                    if(json.code == 200){
                        alert(json.msg);
                    }else{
                        alert(json.msg);
                    }
                });
            });
        }
    };

    new foo();
})(jQuery);
