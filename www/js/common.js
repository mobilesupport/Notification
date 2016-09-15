var db;

var dbmanager = {
    initdb:function(){
        db = window.openDatabase("Database", "1.0", "Notification", 200000);
    },
    
    createTable:function(){
        db.transaction(createTableTransaction, this.errorExecuteSQL, this.successExecuteSQL);
        
        function createTableTransaction(tx){
            
           tx.executeSql('CREATE TABLE IF NOT EXISTS userprof (userid text PRIMARY KEY , username text, userpass text)');
            
           tx.executeSql('CREATE TABLE IF NOT EXISTS NotificationList (issueID text PRIMARY KEY , issueDate text, ipAddress text, SysName text, SysContact text,SysLocation text,issueStatus text,read text)');    
            
        }
    },
        
        insertData:function(){
            
        db.transaction(function(tx){
            tx.executeSql('SELECT * FROM userprof', [], function(tx, result){
           
                 if(result.rows.length == 0){
                  
                       tx.executeSql('INSERT INTO userprof (userid, username, userpass) VALUES ("001", "Alex","abc123")');    
                       tx.executeSql('INSERT INTO userprof (userid, username, userpass) VALUES ("002", "John","1234")');    
                       tx.executeSql('INSERT INTO userprof (userid, username, userpass) VALUES ("003", "George","aaa1")');

                    }   

                  }, this.errorExecuteSQL);
                });
            
         db.transaction(function(tx){
              
             tx.executeSql('SELECT * FROM NotificationList', [], function(tx, result){
            
                 if(result.rows.length == 0){
                       
                       tx.executeSql('INSERT INTO NotificationList  (issueID, issueDate, ipAddress, SysName, SysContact, SysLocation, issueStatus, read) VALUES ("001", "2016/09/04 17:16:16","10.3.103.253","UPS01_KLIA_HGR6FF4","Administrator","SDF Room 4,1st Floor, HG6"," UPS Temperature Overrun (43.0C/109.4F)","false")');   
                     
                       tx.executeSql('INSERT INTO NotificationList  (issueID, issueDate, ipAddress, SysName, SysContact, SysLocation, issueStatus, read) VALUES ("002", "2015/12/31 17:16:16","10.3.103.253","UPS05_KLIA_TGHMN04","Administrator","SDF Room 4,1st Floor, HG6"," UPS Server Down (43.0C/109.4F)","false")');   
                     
                       tx.executeSql('INSERT INTO NotificationList  (issueID, issueDate, ipAddress, SysName, SysContact, SysLocation, issueStatus, read) VALUES ("003", "2015/01/02 17:16:16","10.3.103.253","UPS01_KLIA_AFRT6F4","Administrator","SDF Room 4,1st Floor, HG6"," UPS Not Responding (43.0C/109.4F)","false")');    

                    }

          }, this.errorExecuteSQL);
        });
},
    
//    displayAll:function(){
//        
//         db.transaction(function (tx) {
//            tx.executeSql('SELECT * FROM userprof', [], function (tx, results) {
//                
//               var len = results.rows.length, i;
//               
//					alert(len);
//               for (i = 0; i < len; i++){
//                   msg = results.rows.item(i).username;
//                   
//                  alert(msg);
//               }
//            }, null);
//         });
//    },
//    
     //select all data
    getUserProfileData:function(returnData){
        db.transaction(function(tx){
            
            tx.executeSql("SELECT * FROM userprof where username='"+userNameInput+"' and userpass='"+passwordInput+"' ", [], function(tx, rs){
                returnData(rs);
          }, this.errorExecuteSQL);
        });
         
    },
    
    
    getNotifyListData:function(returnData){
        db.transaction(function(tx){
           tx.executeSql('SELECT * FROM NotificationList', [], function(tx, rs){
                returnData(rs);
          }, this.errorExecuteSQL);
        });
         
    },
    
    successExecuteSQL:function(){
        //success to executeSQL
        //alert("success");
    },
    
    errorExecuteSQL:function(err){
        //fail executeSQL
        alert("fail "+err.message);
    },

};
    
     
