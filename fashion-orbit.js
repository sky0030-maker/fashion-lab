/* Fashion Orbit · Cargo · 623dc0e · 2026-11-23 */
(() => {
  "use strict";
  const k = "https://www.kering.com/en/";
  const l = "https://www.lvmh.com/en/";
  const m = "https://www.metmuseum.org/art/collection/search/";
  const p = "https://www.pradagroup.com/en/";
  const kHouse = k + "houses/fashion-and-leather-goods/";
  const lHouse = l + "our-maisons/fashion-leather-good/";
  const valentino = "https://www.valentino.com/en-gr/v-universe/maison/history";
  const japan = "https://www.metmuseum.org/pt/essays/miyake-kawakubo-and-yamamoto-japanese-fashion-in-the-twentieth-century";
  const founder = "창립";
  const cofounder = "공동 창립";
  const director = "크리에이티브 디렉터";
  const artistic = "아티스틱 디렉터";

  // 하우스 ID, 표기명, 배경 자료
  const houses = [
    ["balenciaga", "Balenciaga", kHouse + "balenciaga/"],
    ["gucci", "Gucci", kHouse + "gucci/"],
    ["saint-laurent", "Saint Laurent", kHouse + "saint-laurent/"],
    ["bottega", "Bottega Veneta", kHouse + "bottega-veneta/"],
    ["mcqueen", "Alexander McQueen", "https://blog.metmuseum.org/alexandermcqueen/about/"],
    ["dior", "Dior", lHouse + "christian-dior"],
    ["givenchy", "Givenchy", lHouse + "givenchy"],
    ["vuitton", "Louis Vuitton", lHouse + "louis-vuitton"],
    ["fendi", "Fendi", lHouse + "fendi/"],
    ["celine", "Celine", lHouse + "celine"],
    ["loewe", "Loewe", lHouse + "loewe"],
    ["kenzo", "Kenzo", lHouse + "kenzo"],
    ["pucci", "Pucci", lHouse + "pucci"],
    ["patou", "Patou", "https://www.patou.com/pages/history-jean-patou"],
    ["chanel", "Chanel", "https://www.chanel.com/sg/about-chanel/the-house-of-chanel/1910/"],
    ["prada", "Prada", p + "group/history.html"],
    ["miu-miu", "Miu Miu", p + "brands/miu-miu.html"],
    ["hermes", "Hermès", "https://www.hermes.com/uk/en/content/235056-six-generations-of-artisans/"],
    ["valentino", "Valentino", valentino],
    ["armani", "Giorgio Armani", "https://www.armani.com/en-us/giorgio-armani/experience/about-giorgio-armani/"],
    ["versace", "Versace", "https://www.versace.com/by/en/about-us/company-profile.html"],
    ["margiela", "Maison Margiela", "https://www.momu.be/en/collection-stories/martin-margiela"],
    ["gaultier", "Jean Paul Gaultier", "https://www.jeanpaulgaultier.com/us/en_US/gaultier-universe/the-designer"],
    ["cdg", "Comme des Garçons", m + "185141"],
    ["miyake", "Issey Miyake", "https://mds.isseymiyake.com/im/en/biography/"],
    ["yohji", "Yohji Yamamoto", japan],
    ["schiaparelli", "Schiaparelli", "https://schiaparelli.com/en/pages/l-histoire-de-la-maison"],
    ["alaia", "Alaïa", "https://fondationazzedinealaia.org/en/chronologie/"],
    ["westwood", "Vivienne Westwood", "https://www.viviennewestwood.com/en-it/westwood-world/the-story-so-far/"],
    ["jil-sander", "Jil Sander", "https://www.jilsander.com/en-de/about.html"]
  ];

  // 하우스 ID, 인물명, 시작/기록 연도, 종료 연도, 역할, 개별 근거(선택).
  // null은 단일 시점 기록 또는 확인된 시작점이다.
  const careers = [
    ["balenciaga", "Cristóbal Balenciaga", 1917, null, founder],
    ["balenciaga", "Demna", 2015, 2025, artistic, k + "news/demna-appointed-artistic-director-of-gucci/"],
    ["balenciaga", "Pierpaolo Piccioli", 2025, 2026, director],
    ["balenciaga", "Martine Rose", 2026, null, director + " 임명", k + "news/martine-rose-appointed-creative-director-of-balenciaga/"],
    ["gucci", "Guccio Gucci", 1921, null, founder],
    ["gucci", "Tom Ford", 1994, null, "수석 디자이너 임명", m + "81266"],
    ["gucci", "Demna", 2025, null, artistic + " 임명", k + "news/demna-appointed-artistic-director-of-gucci/"],
    ["saint-laurent", "Yves Saint Laurent", 1961, null, cofounder],
    ["saint-laurent", "Pierre Bergé", 1961, null, cofounder],
    ["saint-laurent", "Anthony Vaccarello", 2016, null, director + " 임명", k + "news/yves-saint-laurent-appoints-anthony-vaccarello-as-creative-director/"],
    ["bottega", "Michele Taddei", 1966, null, cofounder],
    ["bottega", "Renzo Zengiaro", 1966, null, cofounder],
    ["bottega", "Matthieu Blazy", 2021, null, director + " 임명", "https://www.kering.com/api/download-file/?path=Press_release_Bottega_Veneta_appoints_Matthieu_Blazy_as_Creative_Director_15_11_21_f71ea4ea15.pdf"],
    ["mcqueen", "Alexander McQueen", 1992, null, founder, m + "930535"],
    ["dior", "Christian Dior", 1946, null, founder],
    ["dior", "Yves Saint Laurent", 1957, 1960, artistic, "https://museeyslparis.com/en/stories/les-annees-dior-1-1"],
    ["dior", "John Galliano", 1997, null, "1997–98 F/W 디자인", m + "131792"],
    ["dior", "Jonathan Anderson", 2025, null, "2026 S/S 남성복 데뷔", l + "news-lvmh/jonathan-anderson-presents-debut-collection-for-dior-at-mens-summer-2026-show"],
    ["givenchy", "Hubert de Givenchy", 1952, null, founder],
    ["givenchy", "Alexander McQueen", 1997, null, "1997 S/S 쿠튀르 디자인", m + "931292"],
    ["vuitton", "Louis Vuitton", 1854, null, founder],
    ["fendi", "Adele Fendi", 1925, null, cofounder],
    ["fendi", "Edoardo Fendi", 1925, null, cofounder],
    ["fendi", "Karl Lagerfeld", 1965, 2019, "디자인 협업", l + "news-lvmh/fendi-celebrates-opening-of-karl-lagerfeld-a-line-of-beauty-exhibition-at-the-metropolitan-museum-of-art-in-new-york"],
    ["celine", "Céline Vipiana", 1945, null, founder, l + "our-group/history/"],
    ["celine", "Michael Rider", 2026, null, "2026 F/W 디자인", l + "news-lvmh/style-and-flair-at-the-celine-winter-2026-show"],
    ["loewe", "Enrique Loewe Roessberg", 1872, null, "가죽 공방 인수 · 하우스 명칭의 유래", "https://www.loewe.com/eur/en/pd/stories/welcome-to-loewe.html"],
    ["loewe", "Jonathan Anderson", 2025, null, "2025 F/W 디자인", l + "news-lvmh/fashion-art-and-craft-for-loewe-fall-winter-2025/"],
    ["kenzo", "Kenzo Takada", 1970, null, founder],
    ["pucci", "Emilio Pucci", 1947, null, founder],
    ["patou", "Jean Patou", 1914, null, founder],
    ["chanel", "Gabrielle Chanel", 1910, null, founder],
    ["chanel", "Karl Lagerfeld", 1983, 2019, artistic, "https://www.chanel.com/in/about-chanel/the-house-of-chanel/1980/"],
    ["chanel", "Matthieu Blazy", 2025, null, artistic + " 취임", "https://www.chanel.com/au/fashion/event/chanel-fashion-new-artistic-director/"],
    ["prada", "Mario Prada", 1913, null, founder],
    ["prada", "Miuccia Prada", 2020, null, "공동 크리에이티브 디렉션 발표", p + "news-media/press-releases-documents/2020/20-09-24-dialogues-prada-ss2021-womenswear.html"],
    ["prada", "Raf Simons", 2020, null, "공동 크리에이티브 디렉션 발표", p + "news-media/press-releases-documents/2020/20-09-24-dialogues-prada-ss2021-womenswear.html"],
    ["miu-miu", "Miuccia Prada", 1993, null, founder],
    ["hermes", "Thierry Hermès", 1837, null, founder],
    ["hermes", "Martin Margiela", 1997, 2003, "여성복 아티스틱 디렉터", "https://www.momu.be/en/exhibitions/new-entry-2"],
    ["valentino", "Valentino Garavani", 1960, null, cofounder],
    ["valentino", "Giancarlo Giammetti", 1960, null, cofounder],
    ["armani", "Giorgio Armani", 1975, null, cofounder],
    ["armani", "Sergio Galeotti", 1975, null, cofounder],
    ["versace", "Gianni Versace", 1978, null, founder],
    ["margiela", "Martin Margiela", 1988, null, cofounder],
    ["margiela", "Jenny Meirens", 1988, null, cofounder],
    ["gaultier", "Jean Paul Gaultier", 1976, null, "첫 컬렉션 발표"],
    ["gaultier", "Martin Margiela", 1984, 1987, "디자인 어시스턴트", "https://www.momu.be/en/collection-stories/martin-margiela"],
    ["margiela", "John Galliano", 2014, null, director + " 임명"],
    ["cdg", "Rei Kawakubo", 1969, null, founder],
    ["miyake", "Issey Miyake", 1970, null, "Miyake Design Studio 설립"],
    ["yohji", "Yohji Yamamoto", 1981, null, "파리 컬렉션 데뷔"],
    ["schiaparelli", "Elsa Schiaparelli", 1927, null, founder],
    ["schiaparelli", "Daniel Roseberry", 2019, null, artistic + " 임명", "https://schiaparelli.com/en/pages/daniel-roseberry"],
    ["alaia", "Azzedine Alaïa", 1981, null, "1981 S/S 첫 기성복 컬렉션", "https://fondationazzedinealaia.org/wp-content/uploads/2022/11/RAPPORT_FAA_2018_2020.pdf"],
    ["westwood", "Vivienne Westwood", 1981, null, "Pirate 컬렉션 공동 발표"],
    ["westwood", "Malcolm McLaren", 1981, null, "Pirate 컬렉션 공동 발표"],
    ["jil-sander", "Jil Sander", 1968, null, founder],
    ["saint-laurent", "Hedi Slimane", 2012, 2016, director, k + "news/yves-saint-laurent-appoints-anthony-vaccarello-as-creative-director/"],
    ["celine", "Hedi Slimane", 2018, null, "아티스틱·크리에이티브·이미지 디렉터 임명", l + "publications/hedi-slimane-named-artistic-creative-and-image-director-of-celine"],
    ["givenchy", "Sarah Burton", 2024, null, director + " 임명", l + "news-lvmh/sarah-burton-appointed-creative-director-of-givenchy/"],
    ["vuitton", "Nicolas Ghesquière", 2025, null, "2025 S/S 여성복 디자인", "https://au.louisvuitton.com/eng-au/magazine/articles/women-spring-summer-2025-show"]
  ];

  // 하우스 ID, 시즌 시작 연도, 표시할 시즌, Met 소장품 ID 또는 공식 쇼 URL.
  const seasons = [
    ["balenciaga", 1948, "1948 S/S", 81102],
    ["balenciaga", 1952, "1952 S/S", 81461],
    ["balenciaga", 1958, "1958 S/S", 84526],
    ["balenciaga", 1964, "1964 S/S", 159117],
    ["saint-laurent", 1975, "1975–76 F/W", 130326],
    ["mcqueen", 1999, "1999 S/S · No. 13", 163152],
    ["dior", 1997, "1997–98 F/W", 131792],
    ["dior", 2025, "2025 S/S · 여성복", "https://www.dior.com/en_us/fashion/womens-fashion/ready-to-wear-shows/spring-summer-2025-ready-to-wear-show"],
    ["dior", 2026, "2026 S/S · 남성복", l + "news-lvmh/jonathan-anderson-presents-debut-collection-for-dior-at-mens-summer-2026-show"],
    ["dior", 2026, "2026 S/S · 오트 쿠튀르", l + "news-lvmh/jonathan-anderson-presents-debut-dior-haute-couture-collection-spring-summer-2026"],
    ["givenchy", 1997, "1997 S/S · 오트 쿠튀르", 931292],
    ["fendi", 2024, "2024 S/S · 쿠튀르", l + "news-lvmh/poetic-emotion-at-fendi-couture-springsummer-2024/"],
    ["loewe", 2025, "2025 F/W", l + "news-lvmh/fashion-art-and-craft-for-loewe-fall-winter-2025/"],
    ["chanel", 1983, "1983 S/S · 2015년 재제작본", 701372],
    ["chanel", 1992, "1992 S/S", 80665],
    ["chanel", 1996, "1996 S/S", 138050],
    ["chanel", 2000, "2000 S/S", 100653],
    ["chanel", 2011, "2011 S/S", 171074],
    ["prada", 2021, "2021 S/S · 여성복", p + "news-media/press-releases-documents/2020/20-09-24-dialogues-prada-ss2021-womenswear.html"],
    ["prada", 2024, "2024 S/S · 여성복", p + "news-media/press-releases-documents/2023/23-09-21-prada-ss-24-womenswear-show.html"],
    ["versace", 1991, "1991 S/S", 83250],
    ["versace", 1996, "1996 S/S", 81319],
    ["versace", 1997, "1997–98 F/W", 81147],
    ["margiela", 1989, "1989 S/S", 781940],
    ["margiela", 1990, "1990 S/S", 922364],
    ["margiela", 1991, "1991 S/S", 781943],
    ["margiela", 1997, "1997 S/S", 80915],
    ["margiela", 1998, "1998 S/S", 914243],
    ["margiela", 2000, "2000 S/S", 834979],
    ["margiela", 2001, "2001 S/S", 834977],
    ["margiela", 2006, "2006 S/S", 747598],
    ["margiela", 2009, "2009 S/S", 715213],
    ["cdg", 1984, "1984 S/S · Round Rubber", 185141],
    ["miyake", 1990, "1990 S/S", 83329],
    ["miyake", 1994, "1994 S/S · Flying Saucer", 80661],
    ["yohji", 1986, "1986–87 F/W", 656331],
    ["westwood", 1994, "1994–95 F/W", 675722],
    ["celine", 2026, "2026 F/W", l + "news-lvmh/style-and-flair-at-the-celine-winter-2026-show"],
    ["celine", 2027, "2027 S/S", l + "news-lvmh/unencumbered-elegance-for-celine-spring-summer-2027-show"],
    ["kenzo", 2026, "2026 S/S", l + "news-lvmh/fashion-love-and-fun-for-kenzo-spring-summer-2026-collection/"],
    ["kenzo", 2026, "2026 F/W", l + "news-lvmh/freedom-color-and-joy-infuse-kenzo-fall-winter-2026-presentation"],
    ["pucci", 2025, "2025 S/S · Portofino", l + "news-lvmh/pucci-presents-spring-summer-2025-collection-in-portofino"],
    ["miu-miu", 2025, "2025 S/S", "https://www.miumiu.com/th/en/miumiu-club/fashion-shows/ss25-fashion-show.html"],
    ["hermes", 2025, "2025 S/S · 여성복", "https://www.hermes.com/hk/en/content/336064-women-spring-summer-collection-2025/"],
    ["hermes", 2026, "2026 S/S · 여성복", "https://www.hermes.com/us/en/content/341542-women-spring-summer-2026-runway-show/"],
    ["valentino", 2025, "2025 S/S · Pavillon des Folies", "https://www.valentino.com/en-us/v-universe/fashion-shows/pret-a-porter/valentino-pavillon-des-folies-spring-summer-2025"],
    ["schiaparelli", 2025, "2025 S/S · 오트 쿠튀르 · Look 1", "https://schiaparelli.com/en/pages/looks/haute-couture-printemps-ete-2025-look1"],
    ["jil-sander", 2025, "2025 S/S · 남성복·여성복", "https://www.jilsander.com/en-us/men-s-and-women-s%3Cbr%3Espring-summer/ss25mw.html"],
    ["vuitton", 2025, "2025 S/S · 여성복", "https://au.louisvuitton.com/eng-au/magazine/articles/women-spring-summer-2025-show"],
    ["bottega", 2025, "2025 Summer", "https://www.bottegaveneta.com/de-de/inside-bottega/kollektionen/kollektion-sommer-25"],
    ["givenchy", 2025, "2025 F/W · Sarah Burton 데뷔", l + "news-lvmh/sarah-burton-debuts-first-collection-with-givenchy-fall-winter-2025/"],
    ["patou", 2026, "2026 S/S", "https://www.patou.com/collections/spring-summer-2026"],
    ["gaultier", 1984, "1984–85 F/W", 105372],
    ["gaultier", 1996, "1996 S/S", 79159],
    ["gaultier", 1998, "1998–99 F/W", 920435],
    ["gaultier", 1999, "1999 S/S", 931130],
    ["gaultier", 2000, "2000 S/S", 84081],
    ["gaultier", 2001, "2001–02 F/W", 626118],
    ["gaultier", 2002, "2002 S/S", 131371],
    ["gaultier", 2008, "2008–09 F/W", 700713],
    ["gucci", 1996, "1996–97 F/W", 832454],
    ["gucci", 2001, "2001 S/S", 768837],
    ["gucci", 2002, "2002–03 F/W", 857042],
    ["gucci", 2003, "2003 S/S", 87613],
    ["alaia", 1986, "1986–87 F/W", 137471],
    ["alaia", 1988, "1988 S/S", 138457],
    ["alaia", 1994, "1994 S/S", 693863],
    ["armani", 1987, "1987 S/S", "https://collections.lacma.org/object/138193"],
    ["armani", 1990, "1990 S/S", 79609]
  ];

  const houseMap = new Map(houses.map(([id, name, url]) => [id, { id, name, url, type: "brand" }]));
  const names = [...new Set(careers.map(row => row[1]))];
  const people = [...houseMap.values(), ...names.map(name => ({ id: name, name, type: "designer" }))];
  const byId = new Map(people.map(item => [item.id, item]));
  const founders = new Set(careers.filter(row => row[4].includes("창립") || row[4].includes("설립")).map(row => row[1]));
  const countText = people.length + "개 노드 · " + careers.length + "개 관계 · " + seasons.length + "개 시즌 링크";
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const instances = new WeakMap();

  function element(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    if (tag === "button") node.type = "button";
    return node;
  }

  function link(url, label) {
    const anchor = element("a", "", label);
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    return anchor;
  }

  function initialize(host) {
    const find = selector => host.querySelector(selector);
    const layer = find("#nodes");
    const detail = find("#detail");
    const space = find("#space");
    if (!layer || !detail || !space) return;

    const previous = instances.get(host);
    if (previous?.layer === layer && previous.detail === detail && previous.space === space &&
        layer.contains(previous.marker)) return;
    previous?.dispose();
    const events = new AbortController();
    const on = (target, type, handler) => target?.addEventListener(type, handler, { signal: events.signal });
    const buttonNamed = pattern => [...host.querySelectorAll("button")].find(b => pattern.test(b.textContent.trim()));
    const back = find("#back, #prev, #previous, #back-btn") || buttonNamed(/^이전 선택$/);
    const typeFilter = find("#index-filter, #index-type") || host.querySelector("select");
    const depth = find("#depth, #z-depth, #z-range") || host.querySelector('input[type="range"]');
    const depthValue = find("#depth-value, #depth-label, #z-value") ||
      [...(depth?.parentElement?.children || [])].find(el => /^\d+(\.\d+)?\s*×$/.test(el.textContent.trim()));
    const searches = [...host.querySelectorAll("#index-search, #search")];
    const list = find("#index-items");
    const rotate = find("#rotate");
    const history = [];
    const initialDepth = depth?.value;
    let selected = null;
    let query = "";
    let yaw = 0.25;
    let pitch = -0.12;
    let zoom = 1;
    let spinning = false;
    let pointer = null;
    let last = 0;
    let frameId;

    const canvas = element("canvas");
    canvas.setAttribute("aria-hidden", "true");
    Object.assign(canvas.style, { position: "absolute", inset: "0", width: "100%", height: "100%", pointerEvents: "none" });
    const context = canvas.getContext("2d");
    layer.replaceChildren(canvas);

    const nodes = new Map(people.map((item, index) => {
      const node = element("button", "node " + item.type);
      const mark = item.name.split(/\s+/).slice(0, 2).map(word => Array.from(word)[0]).join("");
      const disc = element("span", "disc");
      disc.append(element("span", "", mark));
      node.append(disc, element("strong", "", item.name),
        element("small", "", item.type === "brand" ? "FASHION HOUSE" : "DESIGNER"));
      on(node, "click", () => select(item.id));
      layer.append(node);

      // Spread houses and designers across the same sphere.
      const latitude = ((index + 0.5) * 0.7548776662) % 1;
      const y = 1 - 2 * latitude;
      const ring = Math.sqrt(1 - y * y);
      const azimuth = index * Math.PI * (3 - Math.sqrt(5));
      return [item.id, { node, x: ring * Math.cos(azimuth), y, z: ring * Math.sin(azimuth) }];
    }));
    instances.set(host, { layer, detail, space, marker: canvas, dispose() {
      events.abort();
      cancelAnimationFrame(frameId);
    } });

    function renderDetail() {
      const item = byId.get(selected);
      if (!item) {
        detail.replaceChildren(element("div", "eyebrow", "FASHION ORBIT"),
          element("h2", "", "전체 연결망"), element("p", "intro", countText));
        return;
      }
      const jobs = careers.filter(([house, person]) => house === selected || person === selected)
        .sort((a, b) => a[2] - b[2]);
      detail.replaceChildren(element("div", "eyebrow", item.type === "brand" ? "HOUSE TIMELINE" : "DESIGNER CAREER"),
        element("h2", "", item.name));
      if (item.url) detail.append(link(item.url, "하우스 자료"));
      detail.append(element("div", "section-label", "CAREER TIMELINE"));
      for (const [house, person, start, end, role, url] of jobs) {
        const other = byId.get(selected === house ? person : house);
        const article = element("article", "career");
        const button = element("button", "connection");
        const content = element("span");
        content.append(element("strong", "", other.name), element("small", "", role));
        button.append(content);
        button.onclick = () => select(other.id);
        article.append(element("div", "career-years", end ? start + "–" + end : String(start)),
          button, link(url || houseMap.get(house).url, "출처"));
        detail.append(article);
      }
      if (item.type === "brand") {
        const archive = seasons.filter(row => row[0] === item.id).sort((a, b) => a[1] - b[1]);
        detail.append(element("div", "section-label", "SEASON ARCHIVE"));
        if (!archive.length) detail.append(element("p", "intro", "등록된 시즌 자료가 없습니다."));
        for (const [, , title, url] of archive) {
          const row = element("div", "career");
          row.append(link(typeof url === "number" ? m + url : url,
            title + (typeof url === "number" ? " · Met 소장품" :
              url.startsWith("https://collections.lacma.org/") ? " · LACMA 소장품" : " · 공식 자료")));
          detail.append(row);
        }
      }
    }

    function renderIndex() {
      const category = normalize(typeFilter?.value || "");
      const filterType = /brand|house|하우스|브랜드/.test(category) ? "brand" :
        /designer|person|디자이너|인물/.test(category) ? "designer" : "";
      const foundersOnly = /founder|창립|설립/.test(category);
      const matches = people.filter(item =>
        (!filterType || item.type === filterType) && (!foundersOnly || founders.has(item.id)) &&
        normalize(item.name).includes(query));
      const visible = new Set(matches.map(item => item.id));
      for (const [id, view] of nodes) {
        const active = id === selected;
        view.node.hidden = !active && !visible.has(id);
        view.node.style.display = view.node.hidden ? "none" : "";
        view.node.classList.toggle("selected", active);
        view.node.setAttribute("aria-pressed", String(active));
      }
      if (back) back.disabled = history.length === 0;
      const count = find("#index-count");
      if (count) count.textContent = matches.length + "개 표시";
      if (!list) return;
      list.replaceChildren();
      if (!matches.length) list.append(element("p", "intro", "검색 결과가 없습니다."));
      for (const item of matches) {
        const button = element("button", "index-item");
        button.setAttribute("aria-pressed", String(item.id === selected));
        button.append(element("span", "", item.name),
          element("small", "", item.type === "brand" ? "HOUSE" : "DESIGNER"));
        button.onclick = () => select(item.id);
        list.append(button);
      }
    }

    function select(id, remember = true) {
      if (selected === id || (id !== null && !byId.has(id))) return;
      if (remember) history.push(selected);
      selected = id;
      renderIndex();
      renderDetail();
    }

    function frame(time) {
      if (!host.isConnected || !host.contains(canvas)) {
        instances.get(host)?.dispose();
        instances.delete(host);
        return;
      }
      const dt = last ? Math.min(time - last, 50) : 0;
      last = time;
      if (spinning && !pointer) yaw += dt * 0.00045;
      const width = space.clientWidth;
      const height = space.clientHeight;
      const value = depth ? Number(depth.value) : 1.15;
      const zDepth = Number.isFinite(value) ? Math.max(0, Math.min(3, value)) : 1.15;
      const radius = Math.min(width * 0.35, height * 0.34) * zoom;
      const cy = Math.cos(yaw), sy = Math.sin(yaw);
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      const points = new Map();
      const related = new Set();
      if (selected) {
        for (const [house, person] of careers) {
          if (house === selected) related.add(person);
          if (person === selected) related.add(house);
        }
      }
      for (const [id, view] of nodes) {
        if (view.node.hidden) continue;
        const x = view.x * cy + view.z * sy;
        const z = view.z * cy - view.x * sy;
        const y = view.y * cp - z * sp;
        const front = (view.y * sp + z * cp) * zDepth;
        const perspective = 1 / (1 - front * 0.13);
        const px = width / 2 + x * radius * perspective;
        const py = height / 2 + y * radius * perspective;
        const active = selected === id;
        const scale = (active ? 0.95 : byId.get(id).type === "brand" ? 0.69 : 0.56) * perspective;
        view.node.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%) scale(${scale})`;
        view.node.style.zIndex = active ? "350" : String(Math.round(150 + front * 30));
        view.node.style.opacity = !selected || active || related.has(id) ? "1" : "0.24";
        points.set(id, [px, py]);
      }
      if (context) {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        const w = Math.round(width * ratio), h = Math.round(height * ratio);
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.clearRect(0, 0, width, height);
        context.strokeStyle = selected ? "#aff3d9a0" : "#aff3d937";
        context.beginPath();
        for (const [house, person] of careers) {
          if (selected && selected !== house && selected !== person) continue;
          const a = points.get(house), b = points.get(person);
          if (!a || !b) continue;
          context.moveTo(...a);
          context.lineTo(...b);
        }
        context.stroke();
      }
      frameId = requestAnimationFrame(frame);
    }

    for (const input of searches) {
      on(input, "input", () => {
        query = normalize(input.value);
        for (const other of searches) if (other !== input) other.value = input.value;
        renderIndex();
      });
      on(input, "keydown", event => {
        if (event.key !== "Enter" || !query) return;
        event.preventDefault();
        list?.querySelector(".index-item")?.click();
      });
    }
    on(typeFilter, "change", renderIndex);
    on(depth, "input", () => {
      if (depthValue) depthValue.textContent = Number(depth.value).toFixed(2) + "×";
    });
    on(back, "click", () => { if (history.length) select(history.pop(), false); });
    on(find("#plus"), "click", () => { zoom = Math.min(1.6, zoom + 0.1); });
    on(find("#minus"), "click", () => { zoom = Math.max(0.5, zoom - 0.1); });
    function setSpin(value) {
      spinning = value;
      if (rotate) {
        rotate.setAttribute("aria-pressed", String(spinning));
        rotate.textContent = spinning ? "회전 정지" : "자동 회전";
      }
    }
    on(rotate, "click", () => setSpin(!spinning));
    on(find("#reset"), "click", () => {
      history.length = 0;
      selected = null;
      yaw = 0.25;
      pitch = -0.12;
      zoom = 1;
      query = "";
      for (const input of searches) input.value = "";
      if (typeFilter) typeFilter.selectedIndex = 0;
      if (depth) {
        depth.value = initialDepth;
        depth.dispatchEvent(new Event("input"));
      }
      setSpin(false);
      renderIndex();
      renderDetail();
    });

    on(space, "pointerdown", event => {
      if (pointer || !event.isPrimary || event.button !== 0 ||
          event.target.closest("button, input, label, select, a, textarea")) return;
      pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
      space.setPointerCapture(event.pointerId);
    });
    on(space, "pointermove", event => {
      if (pointer?.id !== event.pointerId) return;
      yaw += (event.clientX - pointer.x) * 0.01;
      pitch = Math.max(-1.4, Math.min(1.4, pitch + (event.clientY - pointer.y) * 0.01));
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });
    for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) {
      on(space, type, event => { if (pointer?.id === event.pointerId) pointer = null; });
    }

    host.dataset.orbitInteractive = "true";
    host.dataset.githubConnected = "true";
    const status = find(".sample");
    if (status) status.textContent = countText;
    setSpin(false);
    renderIndex();
    renderDetail();
    frameId = requestAnimationFrame(frame);
  }

  const engine = Symbol.for("fashion-orbit.github.engine");
  if (document[engine]) return;
  document[engine] = true;
  const scan = () => document.querySelectorAll("#fashion-orbit").forEach(initialize);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scan, { once: true });
  else scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
})();
