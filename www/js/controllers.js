angular.module('fo.controllers', [])
.controller('ContentCtrl', ['$scope','$ionicSideMenuDelegate', function($scope,$ionicSideMenuDelegate){
}])
.controller('BookInfoCtrl', ['$scope','$stateParams','BookSer','ShareSer','$cordovaToast','$ionicLoading','$timeout', function($scope,$stateParams,BookSer,ShareSer,$cordovaToast,$ionicLoading,$timeout){
    $ionicLoading.show({template: '正在加载...'});
    $timeout(function(){$ionicLoading.hide();},1000);
    $scope.did=$stateParams.did;
		BookSer.bookinfo({id:$scope.did}).$promise.then(function (succ) {
			$scope.bookinfo=succ;
			$scope.infoView=succ.view;
		}, function (error) {
			$cordovaToast.showShortCenter('网络错误,请稍后再试!');
		})
		$scope.infodis=false;
		$scope.viewAdd=function () {
			BookSer.addView({did:$scope.did}).$promise.then(function(succ) {
				if (succ.status==1) {
					var intview=parseInt($scope.infoView);
					$scope.infoView=++intview;
					$cordovaToast.showShortCenter('点赞成功!');
					$scope.infodis=true;
				} else{
					$cordovaToast.showShortCenter('网络错误,请稍后再试!');
				};
			}, function (error) {
				$cordovaToast.showShortCenter('网络错误,请稍后再试!');
			});

		}

		$scope.WXshare=function () {
				$scope.url='http://www.zhongfox.com/fo/detail_'+$scope.did+'.html';
				$scope.stitle=$scope.bookinfo.title;
				$scope.desc=$scope.bookinfo.description;
				$scope.imgurl=$scope.bookinfo.coverpath;
			ShareSer.shareToWechat($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WFshare=function () {
				$scope.url='http://www.zhongfox.com/fo/detail_'+$scope.did+'.html';
				$scope.stitle=$scope.bookinfo.title;
				$scope.desc=$scope.bookinfo.description;
				$scope.imgurl=$scope.bookinfo.coverpath;
			ShareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
}])

.controller('newTuiCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:0}).$promise.then(function(success) {
		$scope.newTuimaxid=success.maxid;
		$scope.newTuininid=success.ninid;
		$scope.newTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.newslist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.newTuininid,id:0}).$promise.then(function(success) {
	              angular.forEach(success.list, function(value, key) {
	                $scope.newTuilist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.newTuininid=success.ninid;
				$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:0}).$promise.then(function(success) {
		$scope.newTuimaxid=success.maxid;
		$scope.newTuininid=success.ninid;
		$scope.newTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };


}])
.controller('newsCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:1}).$promise.then(function(success) {
		$scope.newsmaxid=success.maxid;
		$scope.newsninid=success.ninid;
		$scope.newslist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.newsninid,id:1}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.newslist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.newsninid=success.ninid;
				$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:1}).$promise.then(function(success) {
		$scope.newsmaxid=success.maxid;
		$scope.newsninid=success.ninid;
		$scope.newslist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('TalkCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:55}).$promise.then(function(success) {
		$scope.Talkmaxid=success.maxid;
		$scope.Talkninid=success.ninid;
		$scope.Talklist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.Talkninid,id:55}).$promise.then(function(success) {
	              angular.forEach(success.list, function(value, key) {
	                $scope.Talklist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Talkninid=success.ninid;
					$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:55}).$promise.then(function(success) {
		$scope.Talkmaxid=success.maxid;
		$scope.Talkninid=success.ninid;
		$scope.Talklist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('ResearchCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:30}).$promise.then(function(success) {
		$scope.Researchmaxid=success.maxid;
		$scope.Researchninid=success.ninid;
		$scope.Researchlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.Researchninid,id:30}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.Researchlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Researchninid=success.ninid;
				$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:30}).$promise.then(function(success) {
		$scope.Researchmaxid=success.maxid;
		$scope.Researchninid=success.ninid;
		$scope.Researchlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('RitualCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
		NewsSer.newslist({id:39}).$promise.then(function(success) {
		$scope.Ritualmaxid=success.maxid;
		$scope.Ritualninid=success.ninid;
		$scope.Rituallist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.newslist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.Ritualninid,id:39}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.Rituallist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Ritualninid=success.ninid;
					$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:39}).$promise.then(function(success) {
		$scope.Ritualmaxid=success.maxid;
		$scope.Ritualninid=success.ninid;
		$scope.Rituallist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('foTuiCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:0}).$promise.then(function(success) {
		$scope.foTuimaxid=success.maxid;
		$scope.foTuininid=success.ninid;
		$scope.foTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.booklist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.foTuininid,id:0}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.foTuilist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.foTuininid=success.ninid;
				$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:0}).$promise.then(function(success) {
		$scope.foTuimaxid=success.maxid;
		$scope.foTuininid=success.ninid;
		$scope.foTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };


}])
.controller('foStartCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:1}).$promise.then(function(success) {
		$scope.foStartmaxid=success.maxid;
		$scope.foStartninid=success.ninid;
		$scope.foStartlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.foStartninid,id:1}).$promise.then(function(success) {
	              angular.forEach(success.list, function(value, key) {
	                $scope.foStartlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.foStartninid=success.ninid;
					$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:1}).$promise.then(function(success) {
		$scope.foStartmaxid=success.maxid;
		$scope.foStartninid=success.ninid;
		$scope.foStartlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('wuChanCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:7}).$promise.then(function(success) {
		$scope.wuChanmaxid=success.maxid;
		$scope.wuChanninid=success.ninid;
		$scope.wuChanlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.wuChanninid,id:7}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.wuChanlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.wuChanninid=success.ninid;
				$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:7}).$promise.then(function(success) {
		$scope.wuChanmaxid=success.maxid;
		$scope.wuChanninid=success.ninid;
		$scope.wuChanlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('StoreCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:12}).$promise.then(function(success) {
		$scope.Storemaxid=success.maxid;
		$scope.Storeninid=success.ninid;
		$scope.Storelist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.Storeninid,id:12}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.Storelist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Storeninid=success.ninid;
				$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:12}).$promise.then(function(success) {
		$scope.Storemaxid=success.maxid;
		$scope.Storeninid=success.ninid;
		$scope.Storelist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('jieLvCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
		BookSer.booklist({id:23}).$promise.then(function(success) {
		$scope.jieLvmaxid=success.maxid;
		$scope.jieLvninid=success.ninid;
		$scope.jieLvlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.booklist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.jieLvninid,id:23}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.jieLvlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.jieLvninid=success.ninid;
				$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:23}).$promise.then(function(success) {
		$scope.jieLvmaxid=success.maxid;
		$scope.jieLvninid=success.ninid;
		$scope.jieLvlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('chanDaoCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
		BookSer.booklist({id:18}).$promise.then(function(success) {
		$scope.chanDaomaxid=success.maxid;
		$scope.chanDaoninid=success.ninid;
		$scope.chanDaolist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.booklist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.chanDaoninid,id:18}).$promise.then(function(success) {
	              angular.forEach(success.list, function(value, key) {
	                $scope.chanDaolist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.chanDaoninid=success.ninid;
					$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:18}).$promise.then(function(success) {
		$scope.chanDaomaxid=success.maxid;
		$scope.chanDaoninid=success.ninid;
		$scope.chanDaolist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('ChatsCtrl', ['$scope','$timeout','ChatSer', function($scope,$timeout,ChatSer){
	$scope.groups=ChatSer.navlist();
}])
.controller('ChatsListCtrl', ['$scope','$stateParams','ChatSer','$timeout', function($scope,$stateParams,ChatSer,$timeout){
	var cid=$stateParams.cid;
	ChatSer.chatslist({id:cid}).$promise.then(function(success) {
		$scope.maxid=success.maxid;
    $scope.chanDaoninid=success.ninid;
		$scope.chatslist=success.list;
		$scope.title=success.ftitle;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	$scope.loadMore = function(){
	    $timeout(function(){
	      ChatSer.chatslist({ninid:$scope.chanDaoninid,id:cid}).$promise.then(function(success) {
	              angular.forEach(success.list, function(value, key) {
	                $scope.chatslist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.chanDaoninid=success.ninid;
				        $scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },1000);
  }
    $scope.doRefresh = function() {
      ChatSer.chatslist({id:cid}).$promise.then(function(success) {
        $scope.maxid=success.maxid;
        $scope.chanDaoninid=success.ninid;
        $scope.chatslist=success.list;
        $scope.title=success.ftitle;
        $timeout(function(){$scope.more=success.more;},2000);
      });
	    $scope.$broadcast("scroll.refreshComplete");
	  };
}])

.controller('NewsInfoCtrl', ['$scope','$stateParams','NewsSer','$ionicActionSheet','ShareSer','$cordovaToast','$ionicLoading','$timeout', function($scope,$stateParams,NewsSer,$ionicActionSheet,ShareSer,$cordovaToast,$ionicLoading,$timeout){
    $ionicLoading.show({template: '正在加载...'});
    $timeout(function(){$ionicLoading.hide();},1000);
    $scope.did=$stateParams.did;
	NewsSer.newsinfo({id:$scope.did}).$promise.then(function (succ) {
			$scope.newsinfo=succ;
			$scope.infoView=succ.view;
		}, function (error) {
			$cordovaToast.showShortCenter('网络错误,请稍后再试!');
		})
		$scope.infodis=false;
		$scope.viewAdd=function () {
			NewsSer.addView({did:$scope.did}).$promise.then(function(succ) {
				if (succ.status==1) {
					var intview=parseInt($scope.infoView);
					$scope.infoView=++intview;
					$cordovaToast.showShortCenter('点赞成功!');
					$scope.infodis=true;
				} else{
					$cordovaToast.showShortCenter('网络错误,请稍后再试!');
				};
			}, function (error) {
				$cordovaToast.showShortCenter('网络错误,请稍后再试!');
			});

		}
		$scope.WXshare=function () {
				$scope.url='http://www.zhongfox.com/news/detail_'+$scope.newsinfo.id+'.html';
				$scope.stitle=$scope.newsinfo.title;
				$scope.desc=$scope.newsinfo.description;
				$scope.imgurl=$scope.newsinfo.coverpath;
			ShareSer.shareToWechat($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WFshare=function () {
				$scope.url='http://www.zhongfox.com/news/detail_'+$scope.newsinfo.id+'.html';
				$scope.stitle=$scope.newsinfo.title;
				$scope.desc=$scope.newsinfo.description;
				$scope.imgurl=$scope.newsinfo.coverpath;
			ShareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
}])
.controller('UserCtrl', ['$scope', '$stateParams','$state','UserSer','$cordovaToast','$interval',function($scope,$stateParams,$state,UserSer,$cordovaToast,$interval){
	$scope.MobileForm=function () {
		UserSer.vmobile({username:$scope.goVerify.mobile,vtype:$scope.vtype}).$promise.then(function(success) {
			if (success.code==0) {
        		$cordovaToast.showShortCenter(success.msg);
			}else{
				$state.go('login');
			}
		}, function(error) {
      		$cordovaToast.showShortCenter('网络不给力!');
		});
	}

	$scope.LoginForm=function() {
		UserSer.login({username:$scope.Login.mobile,password:$scope.Login.pwd}).$promise.then(function(success) {
			if (success.code==0) {
        		$cordovaToast.showShortCenter(success.msg);
			}else{
        		localStorage.setItem('uid',success.uid);
				$state.go('tab.action');
			}
		}, function(error) {
      		$cordovaToast.showShortCenter('网络不给力!');
		});
	}
    $scope.vtype=$stateParams.type;
    $scope.cuntdown='发送验证码';
    $scope.sheight=60;
    $scope.isDisabled=false;
	$scope.sendSms=function () {
    $scope.isDisabled=true;
    $interval(function(){
      $scope.sheight--;
      if ($scope.sheight>0) {
        $scope.cuntdown=$scope.sheight+'秒后可发送';
      } else {
        $scope.cuntdown='发送验证码';
        $scope.isDisabled=false;
      };
    },1000,60);

		UserSer.sendsms({mobile:$scope.goVerify.mobile,type:$scope.vtype}).$promise.then(function(success) {
			if (success.code==0) {
        		$cordovaToast.showShortCenter(success.msg);
			}else{
        $cordovaToast.showShortCenter(success.msg);
        		localStorage.setItem('mobile',success.mobile)
            $scope.vcode=success.vcode;
            $scope.uid=success.uid;
			}
		}, function(error) {
      		$cordovaToast.showShortCenter('网络不给力!');
		});
	}


	$scope.ToVcode=function() {
		var vcode=$scope.vcode;
		if (vcode===$scope.goVerify.vcode) {
			$state.go('setpwd');
		}else{
			$cordovaToast.showShortCenter('验证码错误!');
		}

	}
	$scope.setPwdForm = function() {
      var newpwd=$scope.setPwd.newpwd;var confpwd=$scope.setPwd.confpwd;var mobile=localStorage.getItem('mobile');
      if (newpwd!==confpwd) {

      $cordovaToast.showShortCenter('两次输入密码不一样!');
      }else{
        UserSer.setpwd({pwd:newpwd,mobile:mobile}).$promise.then(function(success) {
         if (success.code==1) {
        $cordovaToast.showShortCenter(success.msg);
          $state.go('login');
         } else{
         $cordovaToast.showShortCenter(success.msg);
         }
        }, function(error){
        $cordovaToast.showShortCenter('网络不给力');
       });
      }
  };
    $scope.Wxlogin=function(){
      Wechat.auth("snsapi_userinfo", function (response) {
        // you may use response.code to get the access token.
        var code=response.code;
        UserSer.wxlogin({code:code}).$promise.then(function(succ){
          if(succ.code==0){
            $cordovaToast.showLongCenter(succ.msg);
          }else{
            localStorage.setItem('uid',succ.uid);
            $state.go('tab.action');
          }

        },function(error){
          $cordovaToast.showLongCenter('网络错误!');
        })
      }, function (reason) {
        $cordovaToast.showLongCenter(reason);
      });
    }

}])
.controller('UinfoCtrl', ['$scope','$state','UserSer','$cordovaToast','$ionicLoading','$timeout',function($scope,$state,UserSer,$cordovaToast,$ionicLoading,$timeout){
    var uid=localStorage.getItem('uid');
    console.log(uid);
    if(angular.isUndefined(uid)|| uid==null){
      $scope.islogin=false;
    }else{
      $scope.islogin=true;
    }

    $scope.refresh=function(){
      UserSer.uinfo().$promise.then(function(succ){
        if(succ.nickname){
          $scope.nickname=succ.nickname;
        }else{
          $scope.nickname='用户名呢';
        }
        $scope.imgurl=succ.headimgurl;
      },function(error){
        $cordovaToast.showShortCenter('网络错误!');
      })
    }

    UserSer.uinfo().$promise.then(function(succ){
      if(succ.nickname){
        $scope.nickname=succ.nickname;
      }else{
        $scope.nickname='没有登录';
      }
      $scope.imgurl=succ.headimgurl;
    },function(error){
      $cordovaToast.showShortCenter('网络错误!');
    })
    $scope.LoginOut=function(){
      localStorage.removeItem('uid');
      $state.go('login');
    }
}])
.controller('MyuanCtrl', ['$scope','$state','UserSer','$cordovaToast',function($scope,$state,UserSer,$cordovaToast){
      UserSer.Ylist().$promise.then(function(succ){
      	if (succ.code==0) {
      		$scope.play='';
      	}else{
      		$scope.play='none';
      		$scope.yuans=succ.yuan;
      	}
      },function(error){
        $cordovaToast.showShortCenter('网络错误!');
      })

      $scope.huan=function (hid) {
      	UserSer.Hyuan({hid:hid}).$promise.then(function (succ) {
      		$cordovaToast.showShortCenter(succ.msg);
      	}, function (error) {
      		$cordovaToast.showShortCenter('网络错误!');
      	})
      }

}])

.controller('ToolCtrl', ['$scope','ToolSer','$ionicHistory', function($scope,ToolSer,$ionicHistory){
  //突变选择服务

}])
  .controller('WorkersCtrl', ['$scope','$state','ToolSer','$cordovaToast',function($scope,$state,ToolSer,$cordovaToast) {
    $scope.WorkForm=function(){
      ToolSer.setWork({title:$scope.setWork.title,desc:$scope.setWork.desc}).$promise.then(function(succ){
        if(succ.code==0){
          $cordovaToast.showShortCenter(succ.msg);
        }else{
          $cordovaToast.showShortCenter(succ.msg);
          $state.go('tab.user');
        }
      },function(error){
        $cordovaToast.showShortCenter('网络错误!');
      })
    }
  }])

  .controller('AdviceCtrl', ['$scope','$state','ToolSer','$cordovaToast', function($scope,$state,ToolSer,$cordovaToast){
    //突变选择服务
    $scope.AdviceForm=function(){

      ToolSer.setAdvice({title:$scope.setAdvice.title,desc:$scope.setAdvice.desc}).$promise.then(function(succ){
        if(succ.code==0){
          $cordovaToast.showShortCenter(succ.msg);
        }else{
          $cordovaToast.showShortCenter(succ.msg);
          $state.go('tab.user');
        }
      },function(error){
        $cordovaToast.showShortCenter('网络错误!');
      })
    }
  }])
.controller('qiuqianCtrl', ['$scope','$stateParams','$location','$ionicModal','$cordovaToast','$cordovaVibration','$state','ToolSer', function($scope,$stateParams,$location,$ionicModal,$cordovaToast,$cordovaVibration,$state,ToolSer){
     $scope.qid=$stateParams.qid;
    localStorage.setItem("qid",$scope.qid);

    var onShake = function () {
    	  var str=$location.path();
		if (str.indexOf('qiuqian')!=-1) {
		   $cordovaVibration.vibrate(100);
    		$state.go('zhuqian');
		};
	};

		shake.startWatch(onShake, 20);
}])
  .controller('zhuqianCtrl', ['$scope','$stateParams','$state','ToolSer','$cordovaToast','ShareSer', function($scope,$stateParams,$state,ToolSer,$cordovaToast,ShareSer){
    var qid=localStorage.getItem("qid");
    ToolSer.qiantitle({qid:qid}).$promise.then(function(succ){
      $scope.title=succ.title;
      $scope.desc1=succ.desc1;
      $scope.desc2=succ.desc2;
      $scope.content=succ.content;
      $scope.mydesc=succ.description;
    },function(error){
      $cordovaToast.showShortCenter('网络不给力');
    })
      $scope.shareQian=function () {
        $scope.url='http://www.zhongfox.com/api.php?s=/Pcweb/shareQian/id/'+qid;
        $scope.stitle=$scope.title;
        $scope.desc=$scope.mydesc;
        $scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
        ShareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
      }
  }])


.controller('ActionCtrl', ['$scope','$state', function($scope,$state){
}])

.controller('BaseCtrl', ['$scope','$ionicLoading','$timeout', function($scope,$ionicLoading,$timeout){
	$ionicLoading.show({template: '正在加载...'});
	$timeout(function(){$ionicLoading.hide();},3000);
  //突变选择服务
}])
.controller('KnowCtrl', ['$scope', function($scope){
  //突变选择服务
}])

.controller('ChatInfoCtrl', ['$scope','$stateParams','ChatSer','$ionicActionSheet','ShareSer','$cordovaToast','$ionicLoading','$timeout', function($scope,$stateParams,ChatSer,$ionicActionSheet,ShareSer,$cordovaToast,$ionicLoading,$timeout){
    $ionicLoading.show({template: '正在加载...'});
    $timeout(function(){$ionicLoading.hide();},1000);
    $scope.did=$stateParams.did;
		ChatSer.chatinfo({id:$scope.did}).$promise.then(function (succ) {
			$scope.chatinfo=succ;
			$scope.infoView=succ.view_count;
		}, function (error) {
			$cordovaToast.showShortCenter('网络错误,请稍后再试!');
		})
		$scope.infodis=false;
		$scope.viewAdd=function () {
			ChatSer.addView({did:$scope.did}).$promise.then(function(succ) {
				if (succ.status==1) {
					var intview=parseInt($scope.infoView);
					$scope.infoView=++intview;
					$cordovaToast.showShortCenter('点赞成功!');
					$scope.infodis=true;
				} else{
					$cordovaToast.showShortCenter('网络错误,请稍后再试!');
				};
			}, function (error) {
				$cordovaToast.showShortCenter('网络错误,请稍后再试!');
			});

		}
		$scope.WXshare=function () {
			$scope.url='http://www.zhongfox.com/issue/detail_'+$scope.chatinfo.id+'.html';
			$scope.stitle=$scope.chatinfo.title;
			$scope.desc=$scope.chatinfo.title;
			$scope.imgurl=$scope.chatinfo.coverpath;
			ShareSer.shareToWechat($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WFshare=function () {
			$scope.url='http://www.zhongfox.com/issue/detail_'+$scope.chatinfo.id+'.html';
			$scope.stitle=$scope.chatinfo.title;
      $scope.desc=$scope.chatinfo.title;
      $scope.imgurl=$scope.chatinfo.coverpath;
			ShareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
}])

.controller('QiufoCtrl', ['$scope','$stateParams','$interval','$state','$timeout','$ionicModal','BaifoSer','$cordovaNetwork','$cordovaToast','$ionicPopup', function($scope,$stateParams,$interval,$state,$timeout,$ionicModal,BaifoSer,$cordovaNetwork,$cordovaToast,$ionicPopup){
	$scope.toid=$stateParams.toid;
	$scope.qfinfo=BaifoSer.get($scope.toid);
	$scope.xiangYes=false;
	$scope.pasused=true;
	 //$scope.isOffline = $cordovaNetwork.isOffline();
	 //$scope.network=$cordovaNetwork.getNetwork();
	$scope.baifo=function() {
		if ($scope.isOffline) {
			$cordovaToast.showShortCenter('无法联网!请检查网络!');
		} else{
		if ($scope.network=='wifi') {
			$scope.myaudio();
		} else{
            $ionicPopup.confirm({
              title: '友情提示!',
              content: '您目前使用的是'+$scope.network+'网络,如果点击确定将会使用您的流量!',
              cancelText:'取消',
              okText:'确定'
            }).then(function(res) {
              if(res) {
              	$cordovaToast.showShortCenter('即将播放音乐...');
                $scope.myaudio();
              } else {
              	$cordovaToast.showShortCenter('取消播放音乐...');
              }
            });
		};
		};

	}
	$scope.myaudio=function () {
		var audio = document.getElementById('myaudio');
			if (audio !== null) {
					audio.src=$scope.qfinfo.music;
				if ($scope.pasused) {
					$cordovaToast.showShortCenter('正在加载音乐,请稍等...');
					audio.play(); //audio.play();// 这个就是播放
					$scope.pasused=false;
				} else {
					audio.pause(); // 这个就是暂停
					$scope.pasused=true;
				}
			}
	}
	$scope.shangx=function() {
		$scope.xiangYes=true;
	}
	$scope.goaction=function () {
		var audio = document.getElementById('myaudio');
		 audio.pause();
		 $state.go('tab.action');
	}
	$scope.qiyuan = function() {
	    var uid=localStorage.getItem('uid');
	    if(angular.isUndefined(uid)|| uid==null){
	      $cordovaToast.showShortCenter('你还没有登陆，请到个人中心登陆...');
	    }else{
          $scope.modal.show();
	    }
        };
    $ionicModal.fromTemplateUrl('modal.html', function(modal) {
          $scope.modal = modal;
        }, {
          animation: 'slide-in-up',
          focusFirstInput: true
        });

}])
  .controller('ModalCtrl', ['$scope','$ionicActionSheet','$ionicPopup','ToolSer','$state',function($scope, $ionicActionSheet, $ionicPopup,ToolSer,$state) {
  	 $scope.huanyuan=window.localStorage.qylist;
    $scope.hideModal = function() {
      $scope.modal.hide();
    };
    $scope.removeModal = function() {
      $scope.modal.remove();
    };
    $scope.QYinfoForm=function () {
		ToolSer.qiyuan({yuan:$scope.QYinfo.qiyuan}).$promise.then(function(succ) {
			if (succ.code==0) {
	    	$cordovaToast.showShortCenter(succ.msg);
			}else{
			$cordovaToast.showShortCenter(succ.msg);
			$scope.modal.hide();
			}
		}, function(error) {
	  		$cordovaToast.showShortCenter('网络不给力!');
		});
		}
    $scope.huany=function () {
    	window.localStorage.qylist='';
    }
    $scope.openActionSheet = function() {
      $ionicActionSheet.show({

        // The various non-destructive button choices
        buttons: [
          { text: 'Share' },
          { text: 'Move' },
        ],

        // The text of the red dructive button
        destructiveText: 'Delete',

        // The title text at the top
        titleText: 'Modify your album',

        // The text of the cancel button
        cancelText: 'Cancel',

        // Called when the sheet is cancelled, either from triggering the
        // cancel button, or tapping the backdrop, or using escape on the keyboard
        cancel: function() {
        },

        // Called when one of the non-destructive buttons is clicked, with
        // the index of the button that was clicked. Return
        // "true" to tell the action sheet to close. Return false to not close.
        buttonClicked: function(index) {
          return true;
        },

        // Called when the destructive button is clicked. Return true to close the
        // action sheet. False to keep it open
        destructiveButtonClicked: function() {
          return true;
        }
      });
    };

    $scope.openPopup = function() {
      $ionicPopup.alert({
       title: 'Hey!',
       content: 'Don\'t do that!'
      }).then(function(res) {});
    };

  }])

//定义常用全局变量
.run(['$rootScope',function ($rootScope) {
  $rootScope.serUrl="http://www.zhongfox.com/api.php?s=/";
}]);


