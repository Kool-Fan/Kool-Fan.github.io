# 样式构建说明

`green-volume/` 里的页面用的是 Tailwind CSS，但**不是**运行时从 CDN 加载，而是事先编译成
`assets/vendor/tailwind.css` 静态文件。这样做是为了不依赖外部域名（国内网络下 CDN 经常加载失败，
一旦失败页面会完全失去样式）。

## 什么时候需要重新编译

只要在 `green-volume/*.html` 里**新增了 Tailwind 类名**（比如把 `md:flex` 改成 `lg:flex`，
或者用了没出现过的颜色、间距类），就必须重新编译一次，否则新类名不会出现在 CSS 里。
只改文字、换图片、调整已有类名则不需要。

## 编译命令

需要 Node.js。在本仓库根目录执行：

```bash
# 首次先安装 Tailwind（版本要和这里保持一致）
npm install tailwindcss@3.4.17 --no-save

# 编译
npx tailwindcss -c green-volume/_build/tailwind.config.js \
  -i green-volume/_build/input.css \
  -o green-volume/assets/vendor/tailwind.css \
  --content "green-volume/**/*.html" --minify
```

编译完成后提交 `assets/vendor/tailwind.css` 即可。

## 两个文件的作用

- `tailwind.config.js`：颜色与字体配置，取自 5 个页面原本内联的 `tailwind.config`（取并集）
- `input.css`：Tailwind 指令入口，以及原页面 `<style type="text/tailwindcss">` 里的自定义样式
  （`.card-hover`、`.park-marker`、`.bg-gradient-green` 等）
