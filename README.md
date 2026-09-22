# 个人作品集网站

一个零依赖的静态作品集站点，纯手写 HTML / CSS / JavaScript，直接托管在 GitHub Pages 上。
首页负责三十秒内说清"我是谁"，内页负责用数据和技术细节证明"我做过什么"。

**线上地址：** https://Kool-Fan.github.io （部署完成后生效）

## 特点

- 无框架、无构建步骤：克隆下来就能打开，不需要装 Node，也不会有依赖过期问题
- 项目内容集中在 `data/projects.js` 一个文件，加项目 = 复制一段对象改内容
- 深色 / 浅色主题，跟随系统并记住选择
- 响应式布局，手机端（HR 常直接用手机点开）同样是完整版式
- 打印样式，浏览器里 `Ctrl + P` 可以直接存成干净的 PDF
- 基本 SEO 与无障碍支持：语义化标签、alt 文本、键盘可达、跳过导航

## 目录结构

```
.
├── index.html                 首页：首屏、项目列表、关于、技能、经历、联系
├── project.html               项目详情页，通过 ?id=xxx 读取项目数据
├── 404.html                   找不到页面时的兜底页
├── favicon.svg                浏览器标签页图标
├── data/
│   └── projects.js            ★ 项目数据，全站唯一内容来源
├── assets/
│   ├── css/style.css          ★ 全站样式，改 --accent 即可换主题色
│   ├── js/main.js             首页交互与项目卡片渲染
│   ├── js/project.js          详情页渲染
│   ├── img/                   头像、项目封面、架构图
│   └── resume/resume.pdf      你的简历 PDF（需要自己放进去）
└── .nojekyll                  告诉 GitHub Pages 不要用 Jekyll 处理
```

## 五步改成你自己的

1. **换姓名和定位**：`index.html` 里搜索「你的名字」和「后端开发 · 分布式系统 · 性能优化」，
   以及 `project.html`、`404.html`、`assets/js/project.js` 里的品牌名。
2. **换联系方式**：`index.html` 里搜索 `bihceuxj@163.com` 和 `github.com/Kool-Fan`，全部替换。
   建议用编辑器全局搜索替换，避免漏掉页脚的链接。
3. **换项目**：打开 `data/projects.js`，里面已经写好三个完整示例，照着改。
   注意团队项目一定要写清自己负责哪一部分，这是面试官最在意的一点。
4. **换封面图**：把 `assets/img/project-1.svg` 等换成你自己的截图。
   截图建议 1200×750，统一尺寸看起来才整齐；架构图放到 `assets/img/` 后在数据里改路径。
5. **放简历**：把简历 PDF 放到 `assets/resume/resume.pdf`，文件名保持一致，导航栏和首屏的按钮就都能用了。

改完之后全站搜一遍 `TODO` 和「你的名字」，确认没有漏网的占位内容。

## 本地预览

直接双击 `index.html` 就能看，但因为项目列表是 JavaScript 渲染的，建议用本地服务器：

```bash
# Python 3（已安装 Python 的话）
python -m http.server 8000

# 或者 Node 环境
npx serve .
```

然后浏览器打开 http://localhost:8000 。

## 部署到 GitHub Pages

### 方案一：用户名仓库（推荐，链接最短）

仓库名必须是 `<你的用户名>.github.io`，这样站点地址就是 `https://<你的用户名>.github.io`，
不用带仓库名后缀。

```bash
# 1. 在 GitHub 网页上新建一个名为 Kool-Fan.github.io 的仓库（不要勾选任何初始化文件）
# 2. 本地关联并推送
git remote add origin https://github.com/Kool-Fan/Kool-Fan.github.io.git
git branch -M main
git push -u origin main

# 3. 打开仓库 Settings → Pages
#    Source 选 Deploy from a branch
#    Branch 选 main，目录选 / (root)，保存
```

等一两分钟，访问 `https://Kool-Fan.github.io` 就能看到了。

### 方案二：普通仓库

仓库名随意（比如 `portfolio`），然后在 Settings → Pages 里同样选 `main` + `/ (root)`。
地址会变成 `https://<用户名>.github.io/portfolio/`。
这种方案下，`index.html` 里的相对路径都是对的，不需要改任何代码。

### 绑定自定义域名（可选，但更专业）

1. 在域名服务商买一个域名，比如 `yourname.dev`，一年几十块。
2. 在仓库 Settings → Pages → Custom domain 填进去，GitHub 会自动生成 `CNAME` 文件并提交。
3. 到域名服务商加 DNS 解析：`A` 记录指向 GitHub Pages 的四个 IP，
   或者 `CNAME` 记录指向 `<用户名>.github.io`。
4. 勾选 Enforce HTTPS。

注意：如果你把站点部署在 Vercel / Netlify 上，默认域名在大陆经常打不开，
一定要绑自定义域名，否则招聘方可能直接看不到。

## 部署后自查清单

- [ ] 手机浏览器打开一次，首屏信息完整、按钮能点
- [ ] 每个项目卡片的封面图都能正常显示，没有裂图
- [ ] 「代码仓库」链接指向的仓库是 public，且 README 内容完整
- [ ] 简历 PDF 能下载，里面写了这个网址
- [ ] 用无痕窗口打开一次，确认没有依赖登录状态
- [ ] 换一台设备或者让朋友点一次，确认大陆网络能正常访问

## 后续可以加的

- 技术博客：用同样的样式加一个 `blog.html`，或者直接挂第三方博客链接
- 英文版：复制一份 `index-en.html`，在导航里加语言切换
- 访问统计：接一个隐私友好的统计脚本（如 Umami / Cloudflare Web Analytics）
- GitHub 动态：个人主页 README 里放项目索引，比单看仓库列表更清楚

## License

代码部分以 MIT 协议开源，站点内的个人内容与项目资料归作者所有，请勿直接复用。
