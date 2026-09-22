/* 项目详情页：按链接里的 ?id= 渲染 data/projects.js 的内容 */
(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "theme";

  function applyTheme(theme) {
    root.dataset.theme = theme;
  }

  applyTheme(
    localStorage.getItem(THEME_KEY) ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
  );

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined) {
      node.textContent = text;
    }
    return node;
  }

  var container = document.getElementById("project-detail");
  var wrap = container ? container.querySelector(".wrap") : null;
  if (!wrap) {
    return;
  }

  var projects = window.PROJECTS || [];
  var id = new URLSearchParams(window.location.search).get("id");
  var project = projects.filter(function (item) {
    return item.id === id;
  })[0];

  wrap.textContent = "";

  if (!project) {
    wrap.appendChild(el("h1", null, "没有找到这个项目"));
    var emptyActions = el("div", "hero-actions");
    var backHome = el("a", "btn btn-primary", "返回首页查看全部项目");
    backHome.href = "./";
    emptyActions.appendChild(backHome);
    wrap.appendChild(emptyActions);
    return;
  }

  document.title = project.title + " · 董博俊";
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", project.summary || project.subtitle || project.title);
  }

  var backLink = el("a", "back-link", "← 返回全部项目");
  backLink.href = "./#projects";
  wrap.appendChild(backLink);

  wrap.appendChild(el("p", "project-meta", project.year + " · " + project.role));
  wrap.appendChild(el("h1", "detail-title", project.title));
  wrap.appendChild(el("p", "detail-subtitle", project.subtitle));

  if (project.tags && project.tags.length) {
    var chips = el("ul", "chips");
    project.tags.forEach(function (tag) {
      chips.appendChild(el("li", null, tag));
    });
    wrap.appendChild(chips);
  }

  if (project.metrics && project.metrics.length) {
    var metrics = el("ul", "metrics metrics-lg");
    project.metrics.forEach(function (metric) {
      var item = el("li");
      item.appendChild(el("strong", null, metric.value));
      item.appendChild(el("span", null, metric.label));
      metrics.appendChild(item);
    });
    wrap.appendChild(metrics);
  }

  if (project.links) {
    var actions = el("div", "hero-actions");
    [
      ["repo", "代码仓库"],
      ["demo", "在线 Demo"],
      ["docs", "设计文档"]
    ].forEach(function (pair) {
      var url = project.links[pair[0]];
      if (!url) {
        return;
      }
      var link = el("a", "btn" + (pair[0] === "repo" ? " btn-primary" : ""), pair[1]);
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      actions.appendChild(link);
    });
    wrap.appendChild(actions);
  }

  var cover = el("img", "detail-cover");
  cover.src = project.cover || "assets/img/project-1.svg";
  cover.alt = project.title + " 封面";
  wrap.appendChild(cover);

  (project.sections || []).forEach(function (section) {
    wrap.appendChild(el("h2", "detail-section-title", section.title));

    (section.body || []).forEach(function (paragraph) {
      wrap.appendChild(el("p", "detail-paragraph", paragraph));
    });

    if (section.items && section.items.length) {
      section.items.forEach(function (item) {
        var block = el("div", "item-block");
        block.appendChild(el("h3", null, item.title));
        block.appendChild(el("p", "detail-paragraph", item.body));
        wrap.appendChild(block);
      });
    }

    if (section.image) {
      var figure = el("figure", "figure");
      var image = el("img");
      image.src = section.image;
      image.alt = section.imageCaption || section.title;
      image.loading = "lazy";
      figure.appendChild(image);
      if (section.imageCaption) {
        figure.appendChild(el("figcaption", null, section.imageCaption));
      }
      wrap.appendChild(figure);
    }
  });

  var foot = el("div", "detail-foot");
  var footLink = el("a", "btn", "← 返回全部项目");
  footLink.href = "./#projects";
  foot.appendChild(footLink);
  wrap.appendChild(foot);

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
