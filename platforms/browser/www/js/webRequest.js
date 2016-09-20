var apiTimeOut = 20000;
var count = 0;
var datacount = 0;

function requestLogin(username, password){

//        $.ajax({
//      url: "http://192.168.1.19/notification_api",
//      type: "GET",  
//      headers: {
//        "Content-Type": "application/x-www-form-urlencoded"
//      },
//      timeout: apiTimeOut,  
//      success: function(data, status, xhr) {
//        
//          var sessionToken=JSON.stringify(data);
//        postLogin(sessionToken, username, password);
//      },
//         
//      error:function (xhr, ajaxOptions, thrownError){
//           loading.endLoading();
//           navigator.notification.alert("API connection failed.", function(){}, "Alert", "Ok");
//          
//        }
//    }) 
        loading.endLoading();
      if(username && password!=""){

        dbmanager.getUserProfileData(function(returnData){

             if(returnData.rows.length>0){

                location.href="notification.html";

            }   
            else{
                navigator.notification.alert("Login failed. Username or password not matched!", function(){}, "Alert", "Ok");
            }
        });    

    }else{
        navigator.notification.alert("Please fill in all the required fields.", function(){}, "Alert", "Ok");
    }
    
}

function postLogin(token, username, password){
    
          if(username && password!=""){

        dbmanager.getUserProfileData(function(returnData){

             if(returnData.rows.length>0){

                location.href="notification.html";

            }   
            else{
                navigator.notification.alert("Login failed. Username or password not matched!", function(){}, "Alert", "Ok");
            }
        });    

    }else{
        navigator.notification.alert("Please fill in all the required fields.", function(){}, "Alert", "Ok");
    }
    
//    var requestUrl="http://192.168.1.19/notification_api/api/user/login";
//     $.ajax({
//      url: requestUrl,
//      method: "POST",
//      headers: {
//        "Content-Type": "application/x-www-form-urlencoded",
//      },
//      data:"username=" + username + "&password="+password+"&registrationId=123" + "&checksum=ffcd408d9fb8835775a782d27c45f0c851b6cac1",
//      timeout: apiTimeout,    
//      success: function(data, status, xhr) {
//        debugger;
//          navigator.notification.alert("Login ya.", function(){}, "this", "Ok");
//        var returnstr=JSON.stringify(data);
//        var uid=data.user.uid;
//        var name=data.user.name;
//        var email=data.user.mail;
//        var profileimg="";
//          
//        if(data.user.picture!=null){
//            profileimg=data.user.picture.url;
//        }
//          
//        var role="";
//        var companyid="";  
//        
//        try{
//            companyid=data.user.field_company_id_user.und[0].target_id;
//        }catch(ex){
//        
//        }
//          
//        var sessionToken=data.token;
//        $.each(data.user.roles , function(key , value){ // First Level
//            if(role=="")
//                role=role+key.toString()
//            else
//                role=role+","+key.toString();
//        });
//        
//       // storeProfile(uid, companyid, name, email, profileimg, role, sessionToken);
//          
//      },
//      error:function (xhr, ajaxOptions, thrownError){
//        debugger;
//          if(xhr.status==0)
//            navigator.notification.alert("Login failed.", function(){}, "MDeC eSolutions", "Ok");
//          else
//            navigator.notification.alert("Invalid username or password.", function(){}, "MDeC eSolutions", "Ok");
//          
//          //loading.endLoading();
//        }
//    })

}