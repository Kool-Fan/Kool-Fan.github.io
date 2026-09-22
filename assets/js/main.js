/* 首页逻辑：主题切换 + 用 data/projects.js 渲染项目卡片 */
(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "theme";

  function applyTheme(theme) {
    root.dataset.theme = theme;
  }

  var savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(
    savedTheme ||
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

  function detailUrl(id) {
    return "project.html?id=" + encodeURIComponent(id);
  }

  function renderCard(project) {
    var card = el("article", "card project-card");

    var coverLink = el("a", "project-cover");
    coverLink.href = detailUrl(project.id);
    coverLink.setAttribute("aria-label", "查看项目：" + project.title);
    var img = el("img");
    img.src = project.cover || "assets/img/project-1.svg";
    img.alt = project.title + " 封面";
    img.loading = "lazy";
    img.width = 1200;
    img.height = 750;
    coverLink.appendChild(img);
    card.appendChild(coverLink);

    var body = el("div", "project-body");
    body.appendChild(el("p", "project-meta", project.year + " · " + project.role));
    body.appendChild(el("h3", "project-title", project.title));
    body.appendChild(el("p", "project-summary", project.summary || project.subtitle));

    if (project.metrics && project.metrics.length) {
      var metrics = el("ul", "metrics");
      project.metrics.slice(0, 3).forEach(function (metric) {
        var item = el("li");
        item.appendChild(el("strong", null, metric.value));
        item.appendChild(el("span", null, metric.label));
        metrics.appendChild(item);
      });
      body.appendChild(metrics);
    }

    if (project.tags && project.tags.length) {
      var chips = el("ul", "chips chips-sm");
      project.tags.forEach(function (tag) {
        chips.appendChild(el("li", null, tag));
      });
      body.appendChild(chips);
    }

    var actions = el("div", "project-actions");
    var detail = el("a", "btn btn-sm btn-primary", "查看技术复盘");
    detail.href = detailUrl(project.id);
    actions.appendChild(detail);

    if (project.links && project.links.repo) {
      var repo = el("a", "btn btn-sm", "代码仓库");
      repo.href = project.links.repo;
      repo.target = "_blank";
      repo.rel = "noopener";
      actions.appendChild(repo);
    }

    if (project.links && project.links.demo) {
      var demo = el("a", "btn btn-sm", "在线 Demo");
      demo.href = project.links.demo;
      demo.target = "_blank";
      demo.rel = "noopener";
      actions.appendChild(demo);
    }

    body.appendChild(actions);
    card.appendChild(body);
    return card;
  }

  var grid = document.getElementById("project-grid");
  if (grid) {
    var projects = window.PROJECTS || [];
    if (projects.length) {
      projects.forEach(function (project) {
        grid.appendChild(renderCard(project));
      });
    } else {
      grid.appendChild(el("p", "notice", "还没有项目，请在 data/projects.js 里添加。"));
    }
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
