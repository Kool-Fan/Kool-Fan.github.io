# 董博俊 · 个人作品集

**线上地址：** https://kool-fan.github.io

北京林业大学物联网工程专业 2027 届本科生，方向为嵌入式开发、机器人系统与计算机视觉。
本站收录四个项目，均按项目背景、个人分工、关键技术决策与结果四个部分组织。

## 项目

| 项目 | 我的角色 | 关键内容 |
|---|---|---|
| **[基于大模型与 ROS2 的沙盘智能导航小车](https://kool-fan.github.io/project.html?id=ros2-navigation-platform)** | 核心开发 | 定位出厂固件航向虚报 1.8~3.8 倍的根因并完成修复，解决建图自转与导航失效；实现 ArUco 厘米级对准闭环与面向大模型的路径规划接口 |
| **[AI 相机：实时景观识别与智能评分（Android）](https://kool-fan.github.io/project.html?id=ai-camera-android)** | 个人项目 | 端侧 TensorFlow Lite 推理、MVVM 架构、ROOM 持久化与 Retrofit 同步，含 Flask 服务端与局域网自动发现 · [源码](https://github.com/Kool-Fan/ai-camera-android) · [APK](https://github.com/Kool-Fan/ai-camera-android/releases) |
| **[YOLOv5 交通目标检测](https://kool-fan.github.io/project.html?id=yolov5-traffic-detection)** | 个人项目 | 从 BDD100K 选取图像手工标注并自建数据集，训练交通指示牌、车辆与信号灯三类检测；通过混淆矩阵定位到 46% 的指示牌被误判为背景 · [源码](https://github.com/Kool-Fan/yolov5-traffic-detection) |
| **[圆明园三维绿量网站（绿影寻踪）](https://kool-fan.github.io/project.html?id=yuanmingyuan-green-volume)** | 大创技术负责 · 暑期社会实践队长 | 将三维绿量算法实现为面向公众的可视化网站，暑期社会实践获院级三等奖 · [网站](https://kool-fan.github.io/green-volume/) |

## 关于本站

站点为静态页面，使用 HTML / CSS / JavaScript 编写，部署于 GitHub Pages。项目数据与页面渲染分离：
项目内容集中存放在 `data/projects.js`，详情页通过 `project.html?id=xxx` 渲染，新增项目不需要改动页面结构。

页面适配桌面与移动端，支持深色 / 浅色主题，并包含基本的 SEO 与无障碍处理。两段演示视频已压缩为
1080p 并启用流式加载，打开页面时不会预载视频文件。

站点的部署方式与内容更新步骤见 [MAINTENANCE.md](MAINTENANCE.md)。

## 联系

邮箱：bihceuxj@163.com ｜ GitHub：https://github.com/Kool-Fan

---

站点内的个人内容、简历与项目资料归作者所有，请勿直接复用。
