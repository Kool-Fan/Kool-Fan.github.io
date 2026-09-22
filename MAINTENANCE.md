# 站点维护说明

这份文档写给自己：记录目录结构、内容更新方式与部署配置。
面向访客的项目介绍在 [README.md](README.md)，站点本身在 https://kool-fan.github.io 。

## 目录结构

```
.
├── index.html                 首页：首屏、项目、关于、技能、专利、经历、联系
├── project.html               项目详情页，通过 ?id=xxx 读取项目数据
├── 404.html                   找不到页面时的兜底页
├── favicon.svg                浏览器标签页图标
├── data/
│   └── projects.js          ★ 项目数据，全站唯一内容来源
├── assets/
│   ├── css/style.css        ★ 全站样式，改 --accent 变量即可换主题色
│   ├── js/main.js             首页交互与项目卡片渲染
│   ├── js/project.js          详情页渲染
│   ├── img/                   头像、项目封面、技术流程图、视频封面帧
│   │   ├── ai-camera/         AI 相机的界面截图
│   │   └── yolo/              YOLOv5 的训练曲线、混淆矩阵与预测对比图
│   ├── video/                 演示视频（ROS 小车 26MB + AI 相机 11MB）
│   └── resume/resume.pdf      简历 PDF（替换同名文件即可更新）
├── green-volume/              圆明园三维绿量网站（独立的静态子站）
│   └── _build/                子站 Tailwind 的构建配置与说明
└── .nojekyll                  告诉 GitHub Pages 不要用 Jekyll 处理
```

## 怎么更新内容

1. **改项目**：编辑 `data/projects.js`。每个项目是一个对象，字段含义写在文件开头的注释里。
   - `cover` 是卡片封面，`detailImage` 可选（详情页顶部想用另一张图时填）
   - `video` 字段控制是否显示播放器，`gallery` 控制是否显示截图区，留空即不显示
   - `linkLabels` 可以覆盖链接按钮的默认文字（例如把 demo 显示成「打开网站」）
2. **改个人信息**：编辑 `index.html`，首屏、关于、技能、专利、经历、联系各是一段独立区块。
3. **换图片**：直接覆盖 `assets/img/` 下的同名文件（封面建议 1200×750）。
4. **更新简历**：用新的 PDF 覆盖 `assets/resume/resume.pdf`，文件名保持不变。
5. **自查**：运行 `node ../work/check-site.mjs .`
   （检查项目字段缺失、id 重复、图片与视频路径写错等问题）。

改完后提交并推送，几十秒后线上自动更新：

```bash
git add -A
git commit -m "更新项目内容"
git push
```

## 本地预览

直接双击 `index.html` 能看到大部分内容，但项目列表由 JavaScript 渲染，建议起一个本地服务器：

```bash
python -m http.server 8000     # 或 npx serve .
```

然后访问 http://localhost:8000 。

## 部署状态

- 仓库：`Kool-Fan/Kool-Fan.github.io`（public）
- Pages 来源：`main` 分支根目录 `/`
- 站点地址：https://kool-fan.github.io

仓库名符合 GitHub Pages 的用户站规则（`<用户名>.github.io`），所以地址不带仓库名后缀，链接更短，
也方便放进简历。

### 换成自己的域名

1. 买一个域名，比如 `dongbojun.com`，一年几十块。
2. 仓库 Settings → Pages → Custom domain 填进去，GitHub 会自动生成 `CNAME` 文件并提交。
3. 到域名服务商加 DNS 解析：`A` 记录指向 GitHub Pages 的四个 IP，或 `CNAME` 指向 `kool-fan.github.io`。
4. 勾选 Enforce HTTPS。

## 项目对应的代码仓库

| 项目 | GitHub |
|---|---|
| AI 相机（Android） | https://github.com/Kool-Fan/ai-camera-android （Releases 里有 APK 安装包） |
| YOLOv5 交通目标检测 | https://github.com/Kool-Fan/yolov5-traffic-detection |
| ROS2 沙盘小车 | 源码未公开（含厂家 SDK 与团队交付物），只在站点上展示视频与技术说明 |

## 绿影寻踪网站（`green-volume/`）

线上地址 https://kool-fan.github.io/green-volume/ 。接入作品集时做了三件事：

1. **移除外部 CDN 依赖**。原页面运行时从 `cdn.tailwindcss.com` 加载 Tailwind、从 jsDelivr 加载
   Font Awesome 和 Chart.js。这几个域名在国内网络下不稳定，一旦加载失败页面会完全失去样式，
   所以改成站内自带：用 Tailwind CLI 把用到的类预编译成 `assets/vendor/tailwind.css`（21KB），
   字体图标和图表库也换成本地文件。现在整站没有任何外部请求。
2. **压缩图片**。原图 37 张、合计 19.2MB，其中不少是被当成照片用的 PNG。限制最长边 1400px、
   把照片型 PNG 转成 JPEG 之后压到 7MB。
3. **加返回入口**。每个页面右下角有「返回作品集」按钮，方便招聘方看完回到主页。

更新时把文件覆盖到 `green-volume/` 即可；**新增了 Tailwind 类名**的话需要重新编译一次 CSS，
步骤写在 `green-volume/_build/README.md`。

## 演示视频

| 文件 | 内容 | 规格 | 体积 |
|---|---|---|---|
| `ros-navigation-demo.mp4` | ROS 小车实机演示 | 1080p / 5 分 46 秒 | 26MB（原始 390MB） |
| `ai-camera-demo.mp4` | AI 相机实机演示 | 1080p / 2 分 19 秒 | 11MB（原始 305MB） |

原始素材都超过 GitHub 单文件 100MB 的上限，已用 ffmpeg 以 H.264 重新编码并加 `+faststart`。
AI 相机那段原视频音轨是静音的（-91dB），已直接去掉。替换视频保持文件名不变；换封面帧就覆盖
`assets/img/ros-car-poster.jpg` 或 `assets/img/ai-camera-poster.jpg`。

## 对外分享前的自查清单

- [ ] 手机浏览器打开一次，首屏信息完整、按钮能点、导航能滑
- [ ] 四个项目的封面图与截图都正常显示，没有裂图
- [ ] 简历 PDF 能下载，里面的联系方式与站上一致
- [ ] 用无痕窗口打开一次，确认不依赖登录状态
- [ ] 换一台设备或让朋友点一次，确认大陆网络能正常访问
