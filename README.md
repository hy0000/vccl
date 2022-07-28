## 简介
这是个单页面(SPA)应用,主要技术栈如下
- JavaScript框架：Vue 3.0
- 构建工具：Vite 2.0 beta
- UI库：element-plus 1.0.2-beta

<strong>进行更新和开发需要先安装node和npm</strong>，相当于python和pip

当前版本node:14.8.0; npm：7.5.3; Win10
>之所以选择以上技术栈主要是为了少写代码和方便维护，避免了更新内容要直接修改html的情况。在2020年之前，前端的构建工具(webpack等)都需要编译后才能看到结果，开发效率低，这里使用Vite作为构建工具，特点是热更新，改动了代码在浏览器能实时看到效果。

没有配node环境但想要本地简单运行看效果，可以起这样起一个http服务，然后把`dist`文件夹重命名为`vccl`
```
python -m http.server 8080
```
然后在浏览器访问[http://localhost:8080/vccl](http://localhost:8080/vccl)。还可以在cmd使用`ipconfig`命令查本机局域网ip，然后在同一局域网的别的设备访问`http://本机ip:8080/vccl`也行。
## 运维
1. #### 部署

    将`dist`文件夹内的内容复制到服务器根目录，然后把所有请求重定向至index.html即可完成部署，不然的话，直接通过url访问子页面会404。[服务器重定向设置教程](https://next.router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

    因为教研室主页不在根域名上，有个前缀`vccl`，所以我设置根URL为`http://域名/vccl/`。如果要改成别的，需将下面这个参数改了重新编译：  
   *vite.config.js*
    ```
    base:"/vccl/"
    ```
  
2. #### 更新内容

    更新网页不需要懂前端，只需要懂`json`格式和鼠标右键点击文件可以重命名。通过修改`/src/datas`文件夹中的`json`或`js`文件来更新内容然。后在根目录运行👇重新编译。
    ```
    npm run build
    ```
   如果编译出现不是修改导致的问题，可以删除`node_modules` 文件夹，然后运行👇再运行👆重新编译
   ```
   //设置成国内源，不然很慢
   npm config set registry https://registry.npm.taobao.org
   //重装依赖库
   npm install
   ```
   编译成功后，运行👇查看效果
   ```
    npm run server
    ```
    - 修改成员
    
        新同学照片放到`public/profiles`中对应的文件夹，参考原来的图片名格式来命名，没有照片的用`.null`结尾的空文件代替。重新编译完成修改。相册也是一样，往`public/album`下添加图片即可

    - 添加论文
     
        在`src/datas/publications.js`中添加。论文作者名字格式约定为
      ```
      Yu-Bo Tan     //三字格式
      Bo Tan        //二字格式
      ```
        论文的`id`编码约定为
      ```
      (年份)(编号a)(编号b)
      -年份4位
      -编号a 2位，同年同类的论文从99降序编号
      -编号b 1位，期刊：2；会议：1；书籍：0
      ```
      论文的附件信息添加在论文的`appendix`属性中，可以是文件、链接、pdf等。文件放到`/public/resource/data`，pdf放到`/public/resource/papers`中
    - 其它
    
        都差不多，照着原来的`json`很容易看懂怎么改，每个json文件对应每个页面。记得改完重新编译。
## 开发
- 目录结构
   
   dist 存放编译结果  
   node_modules 库文件所在目录  
   public/ 公共资源，这个目录的东西在编译后会直接复制进dist  
  |--album 相册  
  |--old_pages 没有重做的旧页面  
  |--profiles 证件照  
  |--resource 和论文相关的资源  
   src/  
   |--assets 一些静态资源  
   |--components vue组件  
   |--datas 站点的主要数据  
   |--pages 这个文件夹里的每个vue文件对应一个页面
  

- 了解这几个东西就能看懂项目结构很熟练地上手开发了
    >虽然文件很多，但几乎是构建工具生成的默认结构，我没有魔改过
    
    1. [Vue3](https://vue3js.cn/docs/zh/guide/introduction.html) 需先熟悉JavaScript和有一定的前端开发经验才好懂
    2. [element-plus](https://element-plus.org/#/zh-CN) 用过其它UI库(如bootstrap)能秒上手
    3. [vite-plugin-voie](https://github.com/brattonross/vite-plugin-voie) 一个Vue插件，能够基于文件结构生成路由，和`pages`文件夹有关，易懂

- 关于只需要添加图片就能更新的功能，是`plugin/vite-plugin-dir-info.js`这个自己写的插件。参考`src/datas/members.js`或者插件源码能知道如何使用这个插件。
  
## 其它
我个人比较不满意的是首页背景图，奈何一直没有找到合适的，就随便P的一张。原本计划是做中英双语可切换的页面，但是那个做翻译的插件[（i18n）](http://kazupon.github.io/vue-i18n/) 没搞懂，就只做了英文页面，其实如果只做单语言的话，还是建议做中文的，毕竟都是国内的访问。
  