# 漫画小程序
恭喜你完成小程序 WXML 课程的内容，让我们用学到的内容来开发课程中的第一个小程序吧。

## 项目概述
通过第二章的学习，我们已经掌握 WXML 的基本语法、数据绑定方法、控制属性、事件绑定、模板复用和 WXS 脚本，下面我们把所学知识综合使用，按要求来开发一个漫画小程序。

## 项目说明
### 图片素材
  ![](http://p.qpic.cn/qqconadmin/0/1cf383e408cc4540aa065367a61d2cfb/0)
  ![](http://p.qpic.cn/qqconadmin/0/fbf8155ed9344da59540fa923853fc39/0)
  ![](http://p.qpic.cn/qqconadmin/0/4e0fd51e8ff54a78b9cfeb4c8aedc3d2/0)
  ![](http://p.qpic.cn/qqconadmin/0/405de4c6eb484565895f1144978d7bca/0)

### 项目数据
给定项目数据如下：  

		Page({
		  data: {
		    images: [{
		      src: '/images/dov-1.png',
		      text: '',
		      aside: false,
		      unique: '0'
		    }, {
		      src: '/images/dov-2.png',
		      text: '过年浪一浪,爆竹好,棒棒',
		      aside: false,
		      unique: '1'
		    }, {
		      src: '/images/dov-3.png',
		      text: '突然一个想不开,原地爆炸好心塞',
		      aside: false,
		      unique: '2'
		    }, {
		      src: '/images/dov-4.png',
		      text: '吓死白熊宝宝,变成熊猫大佬',
		      aside: false,
		      unique: '3'
		    }]
		  }
		});

### 项目目标
编写小程序项目代码，并通过编译完成项目要求的功能。

### 项目要求
- 1.构建 WXML 模板
- 2.使用 wx:for 循环输出四个图片，每个图片包含一个 view 组件。每个 view 中又包含一个 image 组件展示图片和一个 text 组件展示漫画旁白
- 3.循环结构通过 template 形成独立模板文件
- 4.为 view 组件绑定事件（其它组件不做事件绑定），默认不展示旁白，当点击图片时可以查看旁白；而在有旁白内容时，点击旁白隐藏内容，点击图片不处理事件
- 5.旁白内容在 WXML 里展示，需要使用 WXS 处理，把所有半角逗号 `,` 改为全角逗号 `，`，WXS 以独立的文件存在

### 项目目标
以下为实际小程序运行截图，可作为 WXML 的开发参考。对于有前端开发经验的同学，推荐自己动手完成所有代码的编写。如果你是前端开发的初学者，可以通过下载[项目代码](http://git.imweb.io/imweb-xcx/comic/tree/master/pages/example)，直接使用我们提供的部份 WXML（未做任何数据绑定和模板化处理） 和 WXSS 进行修改。

![](http://p.qpic.cn/qqconadmin/0/4bc9c937a92741819dd972a905f6e7e7/0)
