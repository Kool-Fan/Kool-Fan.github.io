# 董博俊 · 个人作品集网站

一个零依赖的静态作品集站点，纯手写 HTML / CSS / JavaScript，托管在 GitHub Pages 上。
首页负责说清"我是谁、做过什么"，内页负责把每个项目的背景、我负责的部分和技术路线讲清楚。

**线上地址：** https://kool-fan.github.io
**仓库地址：** https://github.com/Kool-Fan/Kool-Fan.github.io

## 特点

- 无框架、无构建步骤：克隆下来就能打开，不需要装 Node，也不会有依赖过期问题
- 项目内容集中在 `data/projects.js` 一个文件，加项目 = 复制一段对象改内容
- 深色 / 浅色主题，跟随系统并记住选择
- 响应式布局，手机端同样是完整版式，导航可横向滑动
- 打印样式，浏览器里 `Ctrl + P` 可以直接存成干净的 PDF
- 基本 SEO 与无障碍支持：语义化标签、alt 文本、键盘可达、跳过导航

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
│   ├── img/                   头像、项目封面、技术流程图
│   ├── video/                 演示视频（ros-navigation-demo.mp4，约 26MB）
│   └── resume/resume.pdf      简历 PDF（已放入，替换同名文件即可更新）
├── green-volume/              圆明园三维绿量网站（独立的静态子站，详见下文）
└── .nojekyll                  告诉 GitHub Pages 不要用 Jekyll 处理
```

## 当前收录的项目

| 项目 | 时间 | 我的角色 |
|---|---|---|
| 基于大模型与 ROS2 的沙盘智能导航小车 | 2026.09 – 2026.11 | 核心开发（含实机演示视频） |
| 圆明园三维绿量网站（绿影寻踪） | 2025 | 大创技术负责 · 暑期社会实践队长（院级三等奖） |

ROS 小车那一页的内容来自项目实际代码与交付文档，分五个部分：航向修复、激光扫描运动补偿、
Nav2 参数整定、ArUco 厘米级对准和面向大模型的接口层。**该项目的源码不公开**，
页面上只放演示视频与技术说明。

第二个项目把大创的算法工作和暑期社会实践的网站成果合在一页：算法端负责模型训练与 GIS 提取，
呈现端负责把三维绿量做成公众能访问的网站，网站放在 `green-volume/` 子目录里可以直接打开。

详情页里保留了「可补充的内容」，列出的是面试官容易追问、但简历里还没有体现的信息
（模型选型、精度指标、传感器型号、访问量等）。这些位置**故意留空**，没有编造数据——
补上之后，这些页面才真正具备说服力。

## 绿影寻踪网站（`green-volume/`）

这是暑期社会实践做出的静态网站，线上地址 https://kool-fan.github.io/green-volume/ 。
原始文件放在本地暑期实践目录里，接入作品集时做了三件事：

1. **移除外部 CDN 依赖**。原页面运行时从 `cdn.tailwindcss.com` 加载 Tailwind、从 jsDelivr 加载
   Font Awesome 和 Chart.js。这几个域名在国内网络下不稳定，一旦加载失败页面会完全失去样式，
   所以改成站内自带：用 Tailwind CLI 把页面用到的类预编译成 `assets/vendor/tailwind.css`
   （21KB，不再需要运行时编译），字体图标和图表库也换成本地文件。现在整站没有任何外部请求。
2. **压缩图片**。原图 37 张、合计 19.2MB，其中不少是被当成照片用的 PNG。做了尺寸限制（最长边
   1400px）与格式转换（照片型 PNG 转 JPEG），压到 7MB。
3. **加返回入口**。每个页面右下角有「返回作品集」按钮，方便招聘方看完再回到主页。

要更新这个网站，把改动后的文件覆盖到 `green-volume/` 即可。如果新增了 Tailwind 类名，需要重新
编译一次 CSS，具体步骤和命令写在 `green-volume/_build/README.md` 里。

## 演示视频

视频放在 `assets/video/ros-navigation-demo.mp4`，1080p、5 分 46 秒、约 26MB。
原始素材接近 390MB，远超 GitHub 单文件 100MB 的上限，已用 ffmpeg 以 H.264 CRF 22 重新编码，
并加了 `+faststart` 以便边下边播（页面里 `preload="metadata"`，不点播放不会加载整个文件）。

替换视频时保持文件名不变即可；如果想换封面帧，替换 `assets/img/video-poster.jpg`。
项目数据里的 `video` 字段可以控制是否显示播放器，留空表示该项目没有视频。

## 怎么更新内容

1. **改项目**：编辑 `data/projects.js`。每个项目是一个对象，字段含义写在文件开头的注释里。
2. **改个人信息**：编辑 `index.html`，首屏、关于、技能、专利、经历、联系各是一段独立区块，
   用注释标了位置。
3. **换图片**：把 `assets/img/` 里的封面图换成你自己的截图（建议 1200×750，格式 PNG，
   保持同名可以直接覆盖，不用改代码）。
4. **更新简历**：用新的 PDF 覆盖 `assets/resume/resume.pdf`，文件名保持不变。
5. **自查**：在仓库上一级目录运行
   `node ../../work/check-site.mjs .`（脚本会检查项目字段缺失、id 重复、图片路径写错等问题）。

改完后提交并推送，几十秒后线上自动更新：

```bash
git add -A
git commit -m "更新项目内容"
git push
```

## 本地预览

直接双击 `index.html` 就能看，但因为项目列表由 JavaScript 渲染，建议用本地服务器：

```bash
# Python 3
python -m http.server 8000

# 或者 Node 环境
npx serve .
```

然后浏览器打开 http://localhost:8000 。

## 部署状态

已经部署完成，配置如下：

- 仓库：`Kool-Fan/Kool-Fan.github.io`（public）
- Pages 来源：`main` 分支根目录 `/`
- 站点地址：https://kool-fan.github.io

仓库名符合 GitHub Pages 的用户站规则（`<用户名>.github.io`），所以站点地址不带仓库名后缀，
链接更短，也方便放进简历。

### 想换成自己的域名

1. 买一个域名，比如 `dongbojun.com`，一年几十块。
2. 仓库 Settings → Pages → Custom domain 填进去，GitHub 会自动生成 `CNAME` 文件并提交。
3. 到域名服务商加 DNS 解析：`A` 记录指向 GitHub Pages 的四个 IP，或 `CNAME` 指向 `kool-fan.github.io`。
4. 勾选 Enforce HTTPS。

## 对外分享前的自查清单

- [ ] 手机浏览器打开一次，首屏信息完整、按钮能点、导航能滑
- [ ] 每个项目卡片的封面图正常显示，没有裂图
- [ ] 三个项目的「可补充的内容」已经按实际情况补写或删掉
- [ ] 简历 PDF 能正常下载，且里面的邮箱链接是通的
- [ ] 用无痕窗口打开一次，确认不依赖登录状态
- [ ] 换一台设备或让朋友点一次，确认大陆网络能正常访问

## License

代码部分以 MIT 协议开源，站点内的个人内容、简历与项目资料归作者所有，请勿直接复用。
