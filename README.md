# StudyReactNative React Native 自学研发
自学RN开发，以向大前端迈步！

# 环境搭建

1.必须安装的依赖有：Node、React Native 命令行工具、Python2 以及 JDK 和 Android Studio。

  虽然你可以使用任何编辑器来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。

2.不要用淘宝镜像来安装所需要的包，也就是cnpm，因为下载的路径不识别。

  npm config set registry https://registry.npm.taobao.org --global

  npm config set disturl https://npm.taobao.org/dist --global

# Yarn、React Native 的命令行工具（react-native-cli）

  npm install -g yarn react-native-cli //全局安装yarn rn命令行工具

  yarn config set registry https://registry.npm.taobao.org --global  //重定向yarn数据源

  yarn config set disturl https://npm.taobao.org/dist --global
  
# 下载安装开发工具（这里我只尝试了window版的Android Studio）

  http://www.android-studio.org/  从该网址下载所需要的开发工具。
  
  请自行安装相关工具（包括jdk，jre，环境变量的设置等等），具体安装不做阐述。
  
  安装完成以后，创建新项目：react-native init YourProjectName
  
# src/Modules/Home 下面集成了react-redux + reducer + reselect + dispatch action
  
  1.在本工程里面，集成了一个最简单的action，Home/index.js 首次异步读取API数据，dispatch getHomeList action，reducer进行数据存储。
  
  2.在集成了reselect数据缓存机制，针对大型react / react-native 项目有意想不到的功能。
