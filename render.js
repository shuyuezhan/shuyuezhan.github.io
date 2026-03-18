// ============================================================
//  render.js — 共享渲染逻辑，所有页面复用
// ============================================================

const ICONS = {
  mail: '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>',
  github: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  linkedin: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  scholar: '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>',
};

const $ = (id) => document.getElementById(id);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};

// ---- Theme ----
function initTheme() {
  const hour = new Date().getHours();
  const isDay = () => hour >= SITE.dayStart && hour < SITE.dayEnd;
  let currentThemeIsDay = isDay();
  const saved = sessionStorage.getItem('theme');
  if (saved !== null) currentThemeIsDay = saved === 'day';

  function applyTheme(day) {
    document.documentElement.setAttribute('data-theme', day ? 'day' : 'night');
    const btn = $('theme-toggle');
    if (btn) {
      btn.textContent = day ? '🌙' : '☀️';
      btn.title = day ? 'Switch to night mode' : 'Switch to day mode';
    }
  }

  const btn = $('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      currentThemeIsDay = !currentThemeIsDay;
      sessionStorage.setItem('theme', currentThemeIsDay ? 'day' : 'night');
      applyTheme(currentThemeIsDay);
    });
  }
  applyTheme(currentThemeIsDay);
}

// ---- Nav (for subpages, prefix = path to root) ----
function renderNav(containerId, prefix, activePage) {
  const nav = $(containerId);
  if (!nav) return;
  const pages = [
    { label: 'About', href: `${prefix}index.html` },
    { label: 'News', href: `${prefix}pages/news.html` },
    { label: 'Experience', href: `${prefix}pages/experience.html` },
    { label: 'Publications', href: `${prefix}pages/publications.html` },
    { label: 'Blog', href: `${prefix}pages/blog.html` },
    { label: 'Contact', href: `${prefix}pages/contact.html` },
  ];
  nav.innerHTML = `
    <div class="nav-left">
      <a href="${prefix}index.html" class="nav-name" style="text-decoration:none;color:inherit">${SITE.shortName}</a>
      <button class="theme-toggle" id="theme-toggle"></button>
    </div>
    <div class="nav-links">
      ${pages.map(p => `<a href="${p.href}" ${p.label.toLowerCase() === activePage ? 'style="color:var(--text)"' : ''}>${p.label}</a>`).join('')}
    </div>
  `;
}

// ---- Render functions ----
function renderCards(list, containerId) {
  const container = $(containerId);
  if (!container) return;
  list.forEach(item => {
    container.appendChild(el('div', 'card', `
      <div class="card-header">
        <div>
          <div class="card-org">${item.org}</div>
          <div class="card-title">${item.role || item.degree}</div>
        </div>
        <span class="card-tag tag-${item.tagColor}">${item.tag}</span>
      </div>
      <div class="card-date">${item.date}</div>
      <div class="card-desc">${item.desc}</div>
    `));
  });
}

function renderNews(containerId, showAll) {
  const newsList = $(containerId);
  if (!newsList) return;
  const NEWS_INITIAL = showAll ? 9999 : 5;
  SITE.news.forEach((n, i) => {
    const li = el('li', 'news-item', `
      <span class="news-date">${n.date}</span>
      <span class="news-text">${n.text}</span>
    `);
    if (!showAll && i >= NEWS_INITIAL) li.style.display = 'none';
    li.dataset.idx = i;
    newsList.appendChild(li);
  });
  if (!showAll && SITE.news.length > NEWS_INITIAL) {
    const btn = el('button', 'news-show-more', `Show all (${SITE.news.length})`);
    let expanded = false;
    btn.addEventListener('click', () => {
      expanded = !expanded;
      newsList.querySelectorAll('.news-item').forEach(li => {
        li.style.display = (expanded || +li.dataset.idx < NEWS_INITIAL) ? '' : 'none';
      });
      btn.textContent = expanded ? 'Show less' : `Show all (${SITE.news.length})`;
    });
    newsList.parentElement.appendChild(btn);
  }
}

function renderSkills(containerId) {
  const grid = $(containerId);
  if (!grid) return;
  SITE.skills.forEach(s => {
    grid.appendChild(el('div', 'skill-card', `
      <h3>${s.icon} ${s.category}</h3>
      <div class="skill-tags">${s.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}</div>
    `));
  });
}

function renderPublications(containerId) {
  const pubList = $(containerId);
  if (!pubList) return;
  SITE.publications.forEach((p, i) => {
    const titleHtml = p.link
      ? `<a href="${p.link}" target="_blank">${p.title}</a>`
      : p.title;
    pubList.appendChild(el('div', 'pub-item', `
      <div class="pub-num">[${i + 1}]</div>
      <div class="pub-content">
        <div class="pub-title">${titleHtml}</div>
        <div class="pub-authors">${p.authors}</div>
        <div class="pub-venue">${p.venue}</div>
      </div>
    `));
  });
}

function renderBlog(containerId, postPrefix) {
  const grid = $(containerId);
  if (!grid) return;
  const pfx = postPrefix || '';
  if (SITE.blogPosts.length === 0) {
    grid.appendChild(el('p', 'blog-empty', 'Coming soon...'));
  } else {
    // Sort by date descending
    const sorted = [...SITE.blogPosts].sort((a, b) => b.date.localeCompare(a.date));
    sorted.forEach(post => {
      const link = post.link ? (pfx + post.link) : '';
      const titleHtml = link
        ? `<a href="${link}">${post.title}</a>`
        : post.title;
      const tagsHtml = post.tags.map(t => `<span class="blog-tag">${t}</span>`).join('');
      const readmore = link ? `<a href="${link}" class="blog-card-readmore">Read more →</a>` : '';
      grid.appendChild(el('div', 'blog-card', `
        <div class="blog-card-date-col">${post.date}</div>
        <div class="blog-card-content">
          <div class="blog-card-title">${titleHtml}</div>
          <div class="blog-card-meta">
            <div class="blog-card-tags">${tagsHtml}</div>
          </div>
          <div class="blog-card-summary">${post.summary}</div>
          ${readmore}
        </div>
      `));
    });
  }
}

function renderContact(containerId) {
  const grid = $(containerId);
  if (!grid) return;
  [
    { icon: '📧', label: 'Email',          sub: SITE.email,                                    href: `mailto:${SITE.email}` },
    { icon: '🐙', label: 'GitHub',         sub: SITE.github.replace('https://', ''),           href: SITE.github },
    { icon: '💼', label: 'LinkedIn',        sub: SITE.linkedin.replace('https://www.', ''),     href: SITE.linkedin },
    { icon: '🎓', label: 'Google Scholar',  sub: 'View publications',                           href: SITE.scholar },
  ].forEach(c => {
    const a = el('a', 'contact-item', `
      <div class="contact-icon">${c.icon}</div>
      <div>
        <div class="contact-label">${c.label}</div>
        <div class="contact-sub">${c.sub}</div>
      </div>
    `);
    a.href = c.href;
    a.target = '_blank';
    grid.appendChild(a);
  });
}

function renderFooter(containerId) {
  const footer = $(containerId);
  if (footer) footer.innerHTML = `&copy; ${new Date().getFullYear()} ${SITE.name}. Built with love.`;
}
