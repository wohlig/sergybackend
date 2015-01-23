var userid = 0;
var check = 0;
//var order = 0;
var phonecatControllers = angular.module('phonecatControllers', ['firebaseservices', 'angularModalService']);

phonecatControllers.controller('home', function ($scope, FireBaseServices, ModalService) {
    
//    firebase sergy on of off
//    FireBaseServices.sergystatus('on');
    
//    online offline status
    $scope.status = "mybadgeoffline";
    $scope.showsend = false;
//    change status function
    $scope.changestatus = function () {
        if($scope.status == "mybadgeoffline")
        {
            $scope.status = "mybadgeonline";
            FireBaseServices.sergystatus('on');
        }else{
            $scope.status = "mybadgeoffline";
            FireBaseServices.sergystatus('off');
        }
    }
    
    $('#txtSendTo').focus();
    $scope.users = [];
    $scope.comments = [];
//    $scope.comments = FireBaseServices.getchats();
    $scope.message = {};
     $scope.forms = [];
    $scope.products = [];
    $scope.level = 0;
    $scope.categoryid = 0;
    //    check = 0;
//    $scope.chatdir = "chatdir";
    $scope.currentuser = {};
    $scope.currentuser.email = '';
//    $(".panel-body.profile-activity").scrollTop($(this).height());

    var categorysuccess = function (data, status) {
//        console.log("all category");
//        console.log(data.queryresult);
        $scope.forms = data.queryresult;
        $scope.transcripts = data.queryresult;
        $scope.products = data.queryresult;
//        $scope.forms = data.queryresult;
    };
    FireBaseServices.getallcategories().success(categorysuccess);
    
    
//    
//$(function () {
//    // Create a form from some JSON
//    $("#demo-1-form").dform({
//        "action":"index.html",
//        "method":"get",
//        "html":[
//            {
//                "type":"p",
//                "html":"You must login"
//            },
//            {
//                "name":"username",
//                "id":"txt-username",
//                "caption":"Username",
//                "type":"text",
//                "placeholder":"E.g. u...@example.com"
//            },
//            {
//                "name":"password",
//                "caption":"Password",
//                "type":"password"
//            },
//            {
//                "type":"submit",
//                "value":"Login"
//            }
//        ]
//    });
//});
// 
////$("#myform").buildForm(formdata);
//    
    
    
    function ongettingusers(data) {
        $scope.users = data;
        $scope.$apply();
    }

    //    var onuserloadsuccess = function (data, status) {
    //        if (data.queryresult != "") {
    //            for (var i = 0; i < data.queryresult.length; i++) {
    //                console.log(JSON.parse(data.queryresult[i].json));
    //                $scope.comments.push(JSON.parse(data.queryresult[i].json));
    //
    //            }
    //        }
    //    };

    function onuserload(data) {
        
        $scope.comments = FireBaseServices.getchats();    
//        $(".panel-body.profile-activity").scrollTop($(this).height());
        $(".profile-activity").scrollTop(10000000000);
//        data = data.val();
//        console.log("getchat");
//        console.log(userid);
//        //        FireBaseServices.userfromemail($scope.currentuser.email).success(useremailsuccess);
//        //        if (check == 1) {
//        $scope.comments.push(data);
////        $scope.comments=$scope.comments.concat(data);
//        //        }
//        if (data.email == $scope.currentuser.email) {
//            //$scope.$apply();
//        }
    }


    function gettingdata(data) {
        $scope.comments = FireBaseServices.getchats();
//        $(".panel-body.profile-activity").scrollTop($(this).height());
        $(".profile-activity").scrollTop(10000000000);
//        console.log("new data");
//        console.log(data);
//        for (var i = 0; i < data.queryresult.length; i++) {
//            //                console.log(JSON.parse(data.queryresult[i].json));
////            $scope.comments.push(JSON.parse(data.queryresult[i].json));
//
//               // $scope.comments=$scope.comments.concat(JSON.parse(data.queryresult[i].json));
//            
//        }
    }

    function userorder(data) {
        $scope.showsend = false;
        $scope.userorder = data.queryresult;
        FireBaseServices.sergystatus('on');
        $('#txtSendTo').focus();
    }

    var useremailsuccess = function (data, status) {
        userid = data;

        //        FireBaseServices.getchatbyuser(userid).success(onuserloadsuccess);
    };
    
    
//    on sergy change on off
    var callback1 = function (data){
        console.log("sergy on off");
        console.log(data);
    };

    $scope.userchange = function (user) {
        $scope.showsend = false;
//        console.log(user);
        //        userid = "";
        //        FireBaseServices.userfromemail(user.email).success(useremailsuccess);
        for (var i = 0; i < $scope.users.length; i++) {
            $scope.users[i].active = "";
        }
        user.active = "active";
        $scope.currentuser = user;
        FireBaseServices.changecurrentuser(user);
//        $scope.comments = [];
        FireBaseServices.userfromemail(user.email).success(useremailsuccess);
        FireBaseServices.connecttouser(user.uid, user.email, gettingdata, onuserload, callback1, userorder);
    }

    //convert function
    $scope.convert = function (product){
        return JSON.parse(product);
    }
    
    //convert function
    $scope.convertform = function (form){
        console.log(form);
        return JSON.parse(JSON.parse(form).json);
    }
    
//    $scope.scroll = $($document).scroll();
//    $scope.$watch('scroll', function (newValue) {
//        console.log(newValue);
//    });
    
    
    
    $scope.message.text = [];
    $scope.checksend = function (){
        console.log("chekc check");
        if($scope.message.text)
        {
            $scope.showsend = true;
        }else{
            $scope.showsend = false;
        }
    }
    
    $scope.sendmessage = function (msg,type) {
        console.log("|||||||||||||||||||||||||||||||||");
        console.log(msg);
        if(msg!='')
        {
        check = 1;
        console.log("now im user");
        console.log(userid);
        if (userid != 0) {
            FireBaseServices.sendmessage(msg, userid, type);
        } else {
            alert("try again later");
        }
        $scope.message.text = "";
        $('#txtSendTo').focus();
        }
    };

    FireBaseServices.getcurrentusers(ongettingusers);

    // angular popup

    // get all forms############################################################################################################################
   

    //get all forms by search
    $scope.searchforms = function (searchfr) {
        console.log(searchfr);
//        FireBaseServices.getallformssearch(searchtr).success(formssuccess);
        if($scope.level==0)
        {
            FireBaseServices.getallcategoriessearch(searchfr).success(categorysuccess);
            
        }else{
            FireBaseServices.getformsbycategorysearch(searchfr,$scope.categoryid).success(formcategorysuccess);
        }
    }

    // Send form in chat
    $scope.form = [];
    var formcategorysuccess = function (data, status) {
        console.log(data);
        $scope.forms = data.queryresult;
        $scope.level = 1;
    };
    $scope.checkforms = function (form) {
        $scope.categoryid = form.id;
        if($scope.level == 0)
        {
            FireBaseServices.getformsbycategory(form.id).success(formcategorysuccess);
            
        }else{
            console.log("in category form");
            console.log(form);
        $scope.level = 0;
        $scope.sendmessage(form,3);
        }
    }

    // get all products#####################################################################################################################3
    
    var productssuccess = function (data, status) {
        console.log(data.queryresult);
        $scope.products = data.queryresult;
        $scope.level = 1;
    };
//    FireBaseServices.getallproduct().success(productssuccess);

    //get all forms by search
    $scope.searchproducts = function (searchpr) {
//        FireBaseServices.getallproductsearch(searchpr).success(productssuccess);
        
        console.log(searchpr);
//        FireBaseServices.getallformssearch(searchtr).success(formssuccess);
        if($scope.level==0)
        {
            FireBaseServices.getallcategoriessearch(searchpr).success(categorysuccess);
            
        }else{
            FireBaseServices.getproductbycategoryidsearch(searchpr,$scope.categoryid).success(productssuccess);
        }
        
    }
    
    // Send form in chat
    $scope.checkproducts = function (product) {
        console.log(product);
        //        $scope.sendmessage(transcript.text);
        $scope.categoryid = product.id;
        if($scope.level == 0)
        {
            FireBaseServices.getproductbycategoryid(product.id).success(productssuccess);
            
        }else{
        $scope.level = 0;
        $scope.sendmessage(product,4);
        }
    }

    // get all transcript###########################################################################################################################
    $scope.transcripts = [];
//    var transcriptsuccess = function (data, status) {
//        console.log("transcriptdata");
//        console.log(data.queryresult);
//        $scope.transcripts = data.queryresult;
//    };
//
//    FireBaseServices.getalltranscript().success(transcriptsuccess);


    // get transcript by search
    $scope.searchtranscript = function (searchtr) {
        console.log(searchtr);
        if($scope.level==0)
        {
            FireBaseServices.getallcategoriessearch(searchtr).success(categorysuccess);
            
        }else{
            FireBaseServices.getalltranscriptbycategorysearch(searchtr,$scope.categoryid).success(transcriptcategorysuccess);
        }
        
    }

    // Get checked transcript
    var transcriptcategorysuccess = function (data, status) {
        console.log(data);
        $scope.transcripts = data.queryresult;
        $scope.level = 1;
    };
    
    $scope.checktranscript = function (transcript) {
        console.log(userid);
//        console.log(transcript);
//        $scope.sendmessage(transcript.text, 1);
        $scope.categoryid = transcript.id;
        
        console.log(transcript);
        if($scope.level == 0)
        {
            FireBaseServices.getalltranscriptbycategory(transcript.id).success(transcriptcategorysuccess);
            
        }else{
            console.log("in category form");
//            console.log(form);
//        $scope.form.id = form.id;
//        $scope.form.name = form.name;
//        $scope.form.json = form.json;
//        
//        $scope.sendmessage($scope.form,3);
            $scope.level = 0;
            $scope.sendmessage(transcript.text, 1);
        }
        
    }

    $scope.showtranscript = function () {
        
        console.log("in transcript ");
        
        ModalService.showModal({
            templateUrl: 'transcript.html',
            controller: "home"
        }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
                $scope.message = "You said " + result;
            });
        });
        //        FireBaseServices.getalltranscript().success(transcriptsuccess);
    };

    $scope.showforms = function () {
        console.log("im in form");

        ModalService.showModal({
            templateUrl: 'forms.html',
            controller: "home"
        }).then(function (modal1) {
            modal1.element.modal();
            modal1.close.then(function (result) {
                $scope.message = "You said " + result;
            });
        });
        //        FireBaseServices.getalltranscript().success(transcriptsuccess);
    };

    $scope.showproducts = function () {
        console.log("im in product");

        ModalService.showModal({
            templateUrl: 'products.html',
            controller: "home"
        }).then(function (modal2) {
            modal2.element.modal();
            modal2.close.then(function (result) {
                $scope.message = "You said " + result;
            });
        });
        //        FireBaseServices.getalltranscript().success(transcriptsuccess);
    };


    // On order click oneorder()#########################################################################################################

        $scope.oneorder = [];
        $scope.oneorderitem = [];
    
        $scope.oneorderfun = function (order) {
            console.log(order);
            FireBaseServices.getorderbyid(order).success(oneordersuccess);
        }
    
        var oneordersuccess = function (data, status) {
            $scope.ordder = data;
            $scope.oneorder = data.order;
            $scope.oneorderitem = data.orderitem;
            FireBaseServices.setorderid(data);
            $scope.showorder();
        };


    $scope.showorder = function (order) {
        
        ModalService.showModal({
            templateUrl: 'order.html',
            controller: "ModalController"
        }).then(function (modal3) {
            modal3.element.modal();
            modal3.close.then(function (result) {
                $scope.message = "You said " + result;
            });
        });
    };
    
    
//    on form submit click
    $scope.formsubmit = function(comment){
        console.log(comment);
    }


});

phonecatControllers.controller('ModalController', function ($scope, FireBaseServices, close) {


    $scope.oneorder = [];
    $scope.oneorderitem = [];
    console.log("###########################################");
    $scope.order=FireBaseServices.getorderid();
    console.log($scope.order);
//    console.log($scope.order);
//    FireBaseServices.getorderbyid($scope.order).success(oneordersuccess);
//
//    var oneordersuccess = function (data, status) {
//        $scope.ordder = data;
//        $scope.oneorder = data.order;
//        $scope.oneorderitem = data.orderitem;
//        $scope.showorder();
//    };
    console.log($scope.oneorder);
    $scope.close = function (result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };
    $scope.users = "Android";

});