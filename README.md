# ionicApp
基于ionic的APP应用

nodejs 安装cordova和ionic

1、配置nodejs环境变量，因为以后安装的都是全局变量，所以node环境变量例如：

D:\Program Files\nodejs\node_global

2、先安装cordova，在安装ionic，在安装ionic之前需要具备Android SDK环境或者IOS SDK环境，

1.使用npm下载ionic

   npm install -g ionic

 2.选择一个ionic模板项目下载到本地。中间会有一些问询，比如是否使用sass.app的命名等。
   
   md myApp

   cd myApp  //创建一个文件夹并且进入。

   ionic start myApp tabs 

 3.给项目添加android平台。
     
   ionic platform android

 4.在模拟器中运行项目

   ionic emulate android

 说明： 运行emulate/run命令的时候会在platforms目录下生成apk.
      
       在执行platform和emulate命令的过程中如果出现报错大多是因为android环境没有安装完全导致的。
请在cmd中输入android打开android SDK manager检查相关的包是否已经安装完全。
    
       一般来说，tool和emulator都是必须要安装的.然后选择某一版本的android API进行安装。
