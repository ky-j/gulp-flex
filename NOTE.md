# 工作流
0. 创建项目文件夹和 source 子文件夹
0. 添加创建 git 仓库，并设置 .gitignore 文件
0. 安装 node.js（使用 nvm）
0. 使用 `npm i -g gulp` 全局安装 gulp
0. 进入 source 子文件夹，使用 `npm init` 生成 package.json
0. 在项目中使用 `npm i -D gulp` 安装 gulp 到项目依赖中
0. 在项目中使用 `npm i -D gulp-sass` 安装 gulp-sass 到项目依赖中
0. 在项目中使用 `npm i -D gulp-autoprefixer` 安装 gulp-autoprefixer 到项目依赖中
0. 新建 gulpfile.js，撰写任务（sass，拷贝，autoprefixer）
0. 撰写监控任务（watch），以便自动化处理



# gulp 内置方法
- gulp.src: 来源
- gulp.dest: 目标
- gulp.pipe: 管道
- gulp.watch: 监视文件系统，文件改动时自动处理
- gulp.task: 任务

# 常用 gulp 插件
- gulp-sass：sass 编译
- gulp-autoprefixer：添加厂商前缀
- gulp-clean-css：css 文件压缩
- gulp-imagemin：图片压缩
- gulp-htmlmin： html 文件压缩
- gulp-uglify： js 文件压缩
- gulp-concat：文件合并
- gulp-livereload
- gulp-rename：文件重命名

# Material Design
色盘：[Material Palette](https://www.materialpalette.com/)

> 设计问题首先不是审美问题，而是逻辑问题

- 主色（primary）：主体背景
- 强调色（accent）：按钮，表单
- 主要字体颜色（primary text）
- 次要字体颜色（secondary text）
- 分割线颜色
- 文字和图标颜色
- 深主色
- 浅主色

# 响应式设计

### 三要素
1. 弹性布局
2. 弹性图片
3. media 查询

### 常见相应模式

#### Column Drop 列下沉
手机上每一个大块单独占据一行，随着屏幕尺寸拉伸会在同一行上形成多个 column 列
![](http://oc6to49ug.bkt.clouddn.com/ad216308c3c3e345410e6712fe57ed5b.png)

#### Mostly Fulid 基本流体式
基本上跟 Column Drop 一样，但是有一点点 “固定布局 “的特点：当到达一定宽度后，主体内容部分不再变宽，成为固定宽度。
![](http://oc6to49ug.bkt.clouddn.com/6fa1a0950ebd73e3d91bf5d95f44b4e8.png)

#### Layout Shifter 变换式
变换式，也就是不必遵循原有内容顺序，可以根据最佳展示需要来调整大块顺序。
![](http://oc6to49ug.bkt.clouddn.com/b06d0fc9424834e6ad1c35b00c43196f.png)

#### Off Canvas 抽屉式
抽屉式，屏幕不够宽的时候，隐藏，通过按钮呼出。足够宽的屏幕上，始终显示。
![](http://oc6to49ug.bkt.clouddn.com/e99f00d31b16613ffe6b87b70035d5b7.png)

### viewport 设置
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```


# 技巧
- 副标题跟标题的颜色相同，但是设置 .97 的透明度

# 问题
- 如何删除一个项目模块？
- gh-pages 分支是什么意思

# 其他

- [gulp基础使用](http://www.jianshu.com/p/81f5c169fe54)
