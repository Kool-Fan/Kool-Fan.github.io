# 董博俊 · 个人作品集

**线上地址：** https://kool-fan.github.io

北京林业大学物联网工程专业 2027 届本科生，方向是嵌入式开发、机器人系统与计算机视觉。
这个站点收录了四个项目，每个都写清了背景、我负责的部分、关键技术决策与结果——不是作品堆砌，
而是把「遇到什么问题、怎么判断、最后做成什么样」讲完整。

## 项目

| 项目 | 我的角色 | 关键内容 |
|---|---|---|
| **[基于大模型与 ROS2 的沙盘智能导航小车](https://kool-fan.github.io/project.html?id=ros2-navigation-platform)** | 核心开发 | 定位到出厂固件航向虚报 1.8~3.8 倍的根因并修复，解决建图自转与导航失效；实现 ArUco 厘米级对准闭环与面向大模型的路径规划接口 |
| **[AI 相机：实时景观识别与智能评分（Android）](https://kool-fan.github.io/project.html?id=ai-camera-android)** | 个人项目 | 端侧 TensorFlow Lite 推理 + MVVM 架构 + ROOM 持久化 + Retrofit 同步，配套 Flask 服务端与局域网自动发现 · [源码](https://github.com/Kool-Fan/ai-camera-android) · [APK](https://github.com/Kool-Fan/ai-camera-android/releases) |
| **[YOLOv5 交通目标检测](https://kool-fan.github.io/project.html?id=yolov5-traffic-detection)** | 个人项目 | 从 BDD100K 挑图手工标注自建数据集，训练指示牌 / 车辆 / 信号灯三类检测；用混淆矩阵定位到 46% 的指示牌被判为背景 · [源码](https://github.com/Kool-Fan/yolov5-traffic-detection) |
| **[圆明园三维绿量网站（绿影寻踪）](https://kool-fan.github.io/project.html?id=yuanmingyuan-green-volume)** | 大创技术负责 · 暑期社会实践队长 | 把三维绿量算法做成公众可访问的可视化网站，暑期社会实践获院级三等奖 · [网站](https://kool-fan.github.io/green-volume/) |

## 关于这个站点

纯手写的静态站点，HTML / CSS / JavaScript，没有框架也没有构建步骤，托管在 GitHub Pages 上。
内容与视图分离：项目数据集中在 `data/projects.js`，详情页通过 `project.html?id=xxx` 渲染。

支持深色 / 浅色主题，手机端是完整版式（导航可横向滑动），并做了基本的 SEO 与无障碍处理
（语义化标签、图片 alt、键盘可达、跳过导航）。两段项目演示视频已重新编码为 1080p 并加了
`+faststart`，可以边下边播；页面用 `preload="metadata"`，不点播放不会加载整个文件。

站点的部署方式、内容更新步骤与目录说明见 [MAINTENANCE.md](MAINTENANCE.md)。

## 联系

邮箱：bihceuxj@163.com ｜ GitHub：https://github.com/Kool-Fan

---

站点内的个人内容、简历与项目资料归作者所有，请勿直接复用。
