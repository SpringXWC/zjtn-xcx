# 正经推拿用户端
 
> &nbsp;
* **[UI图](https://lanhuapp.com/web/#/item/board?pid=d5004d46-a3d6-4fbe-99c8-53e96a69b066)**
* [微信公众平台](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=860100966)
* [小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/index.html?t=2018412)
* [iconfont 字体](http://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=619516)

> 原型
* [用户端原型图](https://pro.modao.cc/app/jsUw4siw0RsDQg0mXM7hSuuJXHsXavL#screen=s496048E1761520833109701)
* [技师端原型图](https://pro.modao.cc/app/4g03CXfZMzxZPNykq0qgUMCiUSaqW4l#screen=s7FC298859B1520920372264)
* [管理端原型图](https://pro.modao.cc/app/Hw04wd1rEPxvM67SsI5W56n1cN5Wald#screen=s28A143A9D51519466146359) 

## 目录结构
    
```html
.  
├─ assets              静态文件
  ├─ img               图片
  ├─ font              字体文件(仅供查看, 不用发布到服务器 ,使用参见 components > iconfont )
├─ base                基础及公共文件 
  ├─ config            配置
    ├─ config.scss     scss配置及mixin
├─ components          组件
  ├─ ...          
├─ pages               页面  
  ├─ ...
├─ utils
  
app.js                 
app.json               小程序配置
app.wxss               全局样式
project.config.json    项目配置文件

```