//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: "hello",
    answer: ['B','D','B','D','B','C','A','C','A','A'],
    question: [{ "question": "设int m1=5,m2=3；表达式m1>m2?(m1=1): (m2=-1)运算后，m1和m2的值分别是", "option": { "A": "1和-1", "B": "1和3", "C": "5和1","D":"5和3" } }, { "question": "设float m=4.0,n=4.0；使m为10.0的表达式是", "option": { "A": "m-=n*2.5", "B": "m/=n+9 ", "C": "m*=n-6","D":"m+=n+2" } }, { "question": "表达式5&2||5|2的值是", "option": { "A": "0", "B": "1", "C": "2","D":"3" } }, { "question": "设int a[10]；则下面哪个不是对a中的数组元素的引用", "option": { "A": "a[5] ", "B": "*(a+1) ", "C": "a[10-10] ","D":"a(5)" } }, { "question": "设char c[5]={’a’,’b’,’\0’,’c’,’\0’}；则printf(“%s”,c)；的输出是", "option": { "A": "’a’’b’ ", "B": "ab", "C": "abc" ,"D":"“ab\0c”"} }, { "question": "设double *p[6]；则", "option": { "A": "p是指向double型变量的指针", "B": "p是double型数组", "C": "p是指针数组，其元素是指向double型变量的指针","D":".p是指向6个double型数据的一维数组的指针" } }, { "question": "设char *s=”china”；则printf (“%s,%c,%c\n”,s,*s,s[3])；的输出是", "option": { "A": "china,c,n ", "B": " china,china,i ", "C": "c,c,n ","D":"china,china,n" } }, { "question": "设有定义struct ru{long x;float y;}time,*timep=&time；则对time中成员x的正确引用是", "option": { "A": "ru.time.x ", "B": " timep.x", "C": " (*timep).x ","D":"time->x" } }, { "question": "定义一个结构体变量时，系统分配给他的内存单元是：", "option": { "A": "全部成员所需的内存量之和", "B": "全部成员所需的内存量的最大值", "C": "固定的容量","D":"结构体中第一个成员所需的容量"} }, { "question": "设有变量定义int a=3,b=5,c=10;下列表达式的值是（ ）", "option": { "A": "100.0 ", "B": "80.0", "C": "75.0","D":"60.0"} }/*, { "question": "教完别人做事之后，你通常问什么问题才知道他会了", "option": { "A": "你听明白了吗", "B": "你看懂了吗", "C": "你知道了吗" } }, { "question": "学习诗歌时，你觉得怎样记忆更快", "option": { "A": "大声地朗读", "B": "反反复复地读", "C": "不停地走动，打着节拍读" } }, { "question": "你怎么知道别人高兴或者难过", "option": { "A": "听别人的声音", "B": "看别人的脸", "C": "注意别人的动作" } }, { "question": "你喜欢什么样的幽默", "option": { "A": "喜欢滑稽搞笑的语言", "B": "喜欢色彩丰富的戏剧和动画片", "C": "喜欢滑稽搞笑的动作" } }, { "question": "在有许多人的聚会上，你喜欢", "option": { "A": "和别人说话或者听别人说话", "B": "看别人正在干什么", "C": "到处转悠或者闲逛" } }, { "question": "别人怎样解释问题你更容易明白", "option": { "A": "听讲、互相交流、讨论", "B": "用图表、图画、地图等形式", "C": "亲自做一做" } }, { "question": "如果你的假日很有趣，你通常怎样和朋友讲述", "option": { "A": "打电话讲给他听", "B": "给他们看你的照片", "C": "去找他们，给他们讲讲你的经历" } }, { "question": "买衣服时", "option": { "A": "别人说好看我就觉得好，别人说不好我也觉得不好", "B": "选择喜欢的颜色和样式", "C": "选择穿起来舒服的衣服" } }, { "question": "什么情况下你听人说话最清楚", "option": { "A": "你闭上眼睛，不看说话的人，听得更清楚", "B": "必须清清楚楚地看见说话的人，才能听得清楚", "C": "你边走边听别人讲" } }, { "question": "你最容易记住别人的", "option": { "A": "别人说过的话", "B": "别人的相貌", "C": "别人做过的" } }*/]
  }
})