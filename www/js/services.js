angular.module('fo.services', ['ngResource'])

  .factory('UserSer', ['$resource','$rootScope',function ($resource,$rootScope) {
    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
  return $resource(MobileApp+'User/:fun', {}, {
    //denglu
    login: {method: 'GET',params:{fun:'login'},isArray: false},
    //验证手机
    vmobile: {method: 'GET',params:{fun:'vmobile'},isArray: false},
    //设置密码
    setpwd: {method: 'GET',params:{fun:'setpwd'},isArray: false},
    //发送短信
    sendsms: {method: 'GET',params:{fun:'sendsms'},isArray: false},
    //微信登陆
    wxlogin:{method: 'GET',params:{fun:'wxlogin'},isArray: false},
    //用户信息
    uinfo:{method: 'GET',params:{fun:'uinfo',uid:uid},isArray: false},
    //愿望列表
    Ylist:{method: 'GET',params:{fun:'Ylist',uid:uid},isArray: false},
    //还愿
    Hyuan:{method: 'GET',params:{fun:'Hyuan'},isArray: false},
  })
}])
//藏经阁
  .factory('BookSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Book/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: true},
      //denglu
      booklist: {method: 'GET',params:{fun:'booklist'},isArray: false},
      //验证手机
      bookinfo: {method: 'GET',params:{fun:'bookinfo'},isArray: false},
      //设置密码
      addView: {method: 'GET',params:{fun:'addView'},isArray: false},

    })
  }])
  .factory('NewsSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'News/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: false},
      //denglu
      newslist: {method: 'GET',params:{fun:'newslist'},isArray: false},
      //验证手机
      newsinfo: {method: 'GET',params:{fun:'newsinfo'},isArray: false},

      addView: {method: 'GET',params:{fun:'addView'},isArray: false},
    })
  }])
    .factory('ChatSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Issue/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: true},
      //denglu
      chatslist: {method: 'GET',params:{fun:'chatslist'},isArray: false},
      //验证手机
      chatinfo: {method: 'GET',params:{fun:'chatinfo'},isArray: false},
      //
      addView: {method: 'GET',params:{fun:'addView'},isArray: false},
    })
  }])
    .factory('ToolSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=localStorage.getItem('uid');
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Tool/:fun', {}, {
      //denglu
      qiantitle: {method: 'GET',params:{fun:'qiantitle'},isArray: false},
        //祈愿
      qiyuan:{method: 'POST',params:{fun:'qiyuan',uid:uid},isArray: false},
      //义工招募
      setWork:{method: 'POST',params:{fun:'setWork',uid:uid},isArray: false},
      //反馈建议
      setAdvice:{method: 'POST',params:{fun:'setAdvice',uid:uid},isArray: false},
    })
  }])
  .factory('BaifoSer', [function () {
    var chats = [{
      id: 1,
      name: '南无虚空藏菩萨',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/xkz.mp3',
      face: 'image/fo/1.jpg'
    }, {
      id: 2,
      name: '南无药师琉璃光如来',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/ysz.mp3',
      face: 'image/fo/4.jpg'
    }, {
      id: 3,
      name: '南无地藏王菩萨',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/dcz.mp3',
      face: 'image/fo/7.jpg'
    }, {
      id: 4,
      name: '南无送子观世音菩萨',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/gyps.mp3',
      face: 'image/fo/10.jpg'
    }, {
      id: 5,
      name: '南无文殊菩萨',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/wsz.mp3',
      face: 'image/fo/13.jpg'
    },{
      id: 6,
      name: '南无观世音菩萨',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/gyps.mp3',
      face: 'image/fo/16.jpg'
    },{
      id: 7,
      name: '南无大势至菩萨',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/dsz.mp3',
      face: 'image/fo/19.jpg'
    },{
      id: 8,
      name: '南无释迦摩尼佛',
      music: 'http://www.zhongfox.com/Uploads/Attachment/music/amtf.mp3',
      face: 'image/fo/22.jpg'
    }];

    return {
      all: function() {
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  }])
