/**
* chinaSdk Module
*
* Description
*/
angular.module('chinaSdk', [])
.factory('ShareSer', [function () {
	return {
		checkClientInstalled: function () {
			YCQQ.checkClientInstalled(function(){
				alert('client is installed');
			}, function () {
				// if installed QQ Client version is not supported sso,also will get this error
				alert('client is not installed');
			});
		},

		QQLogin:function() {
			var checkClientIsInstalled = 0;//default is 0,only for iOS
		    YCQQ.ssoLogin(function (args) {
		      alert(args.access_token);
		      alert(args.userid);
		    }, function (failReason) {
		      alert(failReason);
		    }, checkClientIsInstalled);
		},
		WeChatLogin:function (argument) {
		 Wechat.auth("snsapi_userinfo", function (response) {
                // you may use response.code to get the access token.
                alert(JSON.stringify(response));
            }, function (reason) {
                alert("Failed: " + reason);
            });
		},
		shareToQQ : function (url,title,description,imageUrl) {
		    var args = {};
		    args.url = url;
		    args.title = title;
		    args.description = description;
		    args.imageUrl = imageUrl;
		    args.appName = "找事";
		    YCQQ.shareToQQ(function () {
		    }, function (failReason) {
		    }, args);
  		},

  		shareToQzone:function (url,title,description,imageUrl) {
		    var args = {};
		    args.url = url;
		    args.title = title;
		    args.description = description;
		    var imgs =[imageUrl];
		    args.imageUrl = imgs;
		    YCQQ.shareToQzone(function () {
		    }, function (failReason) {
		    }, args);
		},
	   	shareToFriends : function( url,title,desc,imgurl) {
        // 创建消息体
		    Wechat.share({
		          message: {
		             title: title,
		             description: desc,
		             mediaTagName: "Media Tag Name(optional)",
		             thumb: imgurl,
		             media: {
		                type: Wechat.Type.WEBPAGE,   // webpage
		                webpageUrl: url    // webpage
		             }
		         },
		         scene: Wechat.Scene.TIMELINE   // share to Timeline
		      }, function () {
		      }, function (reason) {
		      });
		},

		   shareToWechat : function( url,title, desc,imgurl) {
        // 创建消息体
		    Wechat.share({
		          message: {
		             title: title,
		             description: desc,
		             mediaTagName: "Media Tag Name(optional)",
		             thumb: imgurl,
		             media: {
		                type: Wechat.Type.WEBPAGE,   // webpage
		                webpageUrl: url    // webpage
		             }
		         },
		         scene: Wechat.Scene.SESSION   // share to Timeline
		      }, function () {
		      }, function (reason) {
		      });
		},

		QQlogout:function () {
	    YCQQ.logout(function () {
	      alert('logout success');
	    }, function (failReason) {
	      alert(failReason);
	    })
	  },


}
}])
.factory('BaiduMap', [function () {
	return {
		getCurrentPosition: function () {
       		 document.addEventListener('deviceready', function(){
              window.LocationPlugin.getLocation(function (data) {
                return data;
              },function (msg) {
               alert(msg);
              });
          }, false);
      },
	};
}])
