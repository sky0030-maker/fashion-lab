
/* FASHION ORBIT — GITHUB INTERACTIVE TEST
   No image / No compression / Cargo compatible
*/
(() => {
  const people = [
    { id: "balenciaga", name: "Balenciaga", type: "brand", mark: "B" },
    { id: "cristobal", name: "Cristóbal Balenciaga", type: "designer", mark: "CB" },
    { id: "demna", name: "Demna", type: "designer", mark: "D" },
    { id: "martine", name: "Martine Rose", type: "designer", mark: "MR" }
  ];

  const careers = [
    { person: "cristobal", brand: "balenciaga", years: "1917–1968", role: "창립자 · 쿠튀리에" },
    { person: "demna", brand: "balenciaga", years: "2015–2025", role: "크리에이티브 디렉터" },
    { person: "martine", brand: "balenciaga", years: "2026–", role: "크리에이티브 디렉터" }
  ];

  
function initialize(host) {
  const existingLayer = host.querySelector("#nodes");

  if (
    host.dataset.orbitInteractive === "true" &&
    existingLayer?.querySelector(".node")
  ) {
    return;
  }

  host.removeAttribute("data-orbit-interactive");


    const find = selector => host.querySelector(selector);
    const layer = find("#nodes");
    const detail = find("#detail");
    const space = find("#space");

    if (!layer || !detail || !space) return;

    host.dataset.orbitInteractive = "true";
    host.dataset.githubConnected = "true";

    layer.replaceChildren();

    let selected = null;
    let angle = 0;
    let zoom = 1;
    let rotating = false;
    let dragging = false;
    let pointerX = 0;
    let lastFrame = 0;

    const nodes = people.map((person, index) => {
      const element = document.createElement("button");
      element.className = "node " + person.type;

      const disc = document.createElement("span");
      disc.className = "disc";
      const initials = document.createElement("span");
      initials.textContent = person.mark;
      disc.appendChild(initials);

      const title = document.createElement("strong");
      title.textContent = person.name;

      const category = document.createElement("small");
      category.textContent =
        person.type === "brand" ? "FASHION HOUSE" : "DESIGNER";

      element.append(disc, title, category);
      element.addEventListener("click", () => select(person.id));
      layer.appendChild(element);

      return {
        ...person,
        element,
        baseAngle: (index / people.length) * Math.PI * 2
      };
    });

    function select(id) {
      selected = id;
      const item = people.find(p => p.id === id);

      nodes.forEach(n => {
        n.element.classList.toggle("selected", n.id === id);
      });

      const jobs = careers.filter(c =>
        c.person === id || c.brand === id
      );

      detail.replaceChildren();

      const heading = document.createElement("div");
      heading.className = "eyebrow";
      heading.textContent = item.type === "brand"
        ? "HOUSE TIMELINE"
        : "DESIGNER CAREER";

      const name = document.createElement("h2");
      name.textContent = item.name;
      detail.append(heading, name);

      const label = document.createElement("div");
      label.className = "section-label";
      label.textContent = "CAREER TIMELINE";
      detail.appendChild(label);

      jobs.forEach(job => {
        const otherId = id === job.person ? job.brand : job.person;
        const other = people.find(p => p.id === otherId);

        const article = document.createElement("article");
        article.className = "career";

        const years = document.createElement("div");
        years.className = "career-years";
        years.textContent = job.years;

        const button = document.createElement("button");
        button.className = "connection";

        const content = document.createElement("span");
        const strong = document.createElement("strong");
        strong.textContent = other?.name || otherId;
        const small = document.createElement("small");
        small.textContent = job.role;

        content.append(strong, small);
        button.appendChild(content);
        button.onclick = () => select(otherId);

        article.append(years, button);
        detail.appendChild(article);
      });
    }

    function renderIndex(filter = "") {
      const container = find("#index-items");
      if (!container) return;

      container.replaceChildren();

      const matches = people.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
      );

      const count = find("#index-count");
      if (count) count.textContent = matches.length + "개 표시";

      matches.forEach(p => {
        const button = document.createElement("button");
        button.className = "index-item";

        const title = document.createElement("span");
        title.textContent = p.name;

        const small = document.createElement("small");
        small.textContent = p.type === "brand" ? "HOUSE" : "DESIGNER";

        button.append(title, small);
        button.onclick = () => select(p.id);
        container.appendChild(button);
      });
    }

    function frame(time) {
      if (!host.isConnected) return;

      const dt = Math.min((time - lastFrame) / 16.67, 3) || 1;
      lastFrame = time;

      if (rotating && !dragging) angle += 0.008 * dt;

      const width = Math.max(space.clientWidth, 1);
      const height = Math.max(space.clientHeight, 1);
      const radius = Math.min(width * 0.31, height * 0.34);

      nodes.forEach(n => {
        const a = n.baseAngle + angle;
        const x = width / 2 + Math.cos(a) * radius * zoom;
        const y = height / 2 + Math.sin(a) * radius * 0.7 * zoom;
        const z = Math.sin(a);
        const perspective = 1 + z * 0.22;
        const scale = (selected === n.id ? 0.95 : 0.65) * perspective;

        n.element.style.transform =
          `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;

        n.element.style.zIndex = String(Math.round((z + 2) * 100));
        n.element.style.opacity = selected && selected !== n.id ? "0.65" : "1";
      });

      requestAnimationFrame(frame);
    }

    space.addEventListener("pointerdown", event => {
      if (event.target.closest("button")) return;
      dragging = true;
      pointerX = event.clientX;
      space.setPointerCapture(event.pointerId);
    });

    space.addEventListener("pointermove", event => {
      if (!dragging) return;
      angle += (event.clientX - pointerX) * 0.01;
      pointerX = event.clientX;
    });

    space.addEventListener("pointerup", () => dragging = false);
    space.addEventListener("pointercancel", () => dragging = false);

    find("#plus")?.addEventListener("click", () => {
      zoom = Math.min(1.6, zoom + 0.1);
    });

    find("#minus")?.addEventListener("click", () => {
      zoom = Math.max(0.5, zoom - 0.1);
    });

    find("#rotate")?.addEventListener("click", event => {
      rotating = !rotating;
      event.currentTarget.textContent = rotating ? "회전 정지" : "자동 회전";
    });

    find("#reset")?.addEventListener("click", () => {
      selected = null;
      zoom = 1;
      angle = 0;
      renderWelcome();
    });

    find("#index-search")?.addEventListener("input", event => {
      renderIndex(event.target.value);
    });

    find("#search")?.addEventListener("input", event => {
      renderIndex(event.target.value);
    });

    function renderWelcome() {
      detail.innerHTML = `
        <div class="eyebrow">FASHION ORBIT</div>
        <h2>INTERACTIVE TEST</h2>
        <p class="intro">GitHub에서 3D 연결망을 정상적으로 실행했습니다.</p>
        <div class="stats">
          <span><b>4</b>NODES</span>
          <span><b>3</b>CAREERS</span>
        </div>
      `;
    }

    const status = find(".sample");
    if (status) status.textContent = "GITHUB 3D ENGINE CONNECTED";

    renderIndex();
    renderWelcome();
    requestAnimationFrame(frame);
  }

  function scan() {
    document.querySelectorAll("#fashion-orbit").forEach(initialize);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan, { once: true });
  } else {
    scan();
  }

  new MutationObserver(scan).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
