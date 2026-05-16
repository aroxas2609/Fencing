import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const regions = {
  newcastle: {
    slug: "newcastle",
    name: "Newcastle & Hunter",
    short: "Newcastle",
    title: "Fencing Newcastle & Hunter | Chainlink, Diplomat & Security | Johnstone Fencing",
    description:
      "Fencing contractors Newcastle and the Hunter — chainlink, diplomat and security fencing for industrial, schools and rural sites. Free quotes.",
    ogDesc: "Chainlink, diplomat and security fencing across Newcastle, Lake Macquarie and the Hunter Valley.",
    twitterDesc: "Fencing Newcastle and the Hunter. Licensed and insured.",
    intro:
      "Newcastle and the Hunter combine heavy industry, port logistics, schools and semi-rural acreage. We install chainlink, diplomat and security systems sized for Hunter wind exposure, sloping blocks and secure depot perimeters.",
    suburbs: `<ul>
            <li><strong>Newcastle &amp; coast:</strong> Newcastle, Merewether, Charlestown, Belmont, Redhead</li>
            <li><strong>Lake Macquarie:</strong> Warners Bay, Toronto, Speers Point, Cardiff</li>
            <li><strong>Hunter Valley:</strong> Maitland, Thornton, Rutherford, Cessnock (project-dependent)</li>
            <li><strong>Port &amp; industrial:</strong> Kooragang, Mayfield, Tomago logistics corridors</li>
          </ul>`,
    chainlink:
      "Chainlink is widely used for sports facilities, rural boundaries and industrial compounds around Newcastle. We specify strainers and mesh grades for Hunter wind and long runs.",
    diplomat:
      "Diplomat fencing suits schools, strata and commercial frontages across Lake Macquarie and Newcastle suburbs where a neat tubular finish is required.",
    security:
      "Security fencing for warehouses, utilities, transport yards and port-related sites — anti-climb mesh, topped barriers and controlled gate access.",
    faq1q: "Do you service Newcastle and the Hunter Valley?",
    faq1a:
      "Yes. We quote across Newcastle, Lake Macquarie, Maitland and surrounding Hunter towns for chainlink, diplomat and security fencing.",
    faq2q: "What fencing types do you offer in the Hunter?",
    townLabel: "town or suburb",
    cta: "Need fencing in Newcastle or the Hunter?",
    prefix: "nc",
  },
  "southern-highlands": {
    slug: "southern-highlands",
    name: "Southern Highlands",
    short: "Southern Highlands",
    title: "Fencing Southern Highlands | Chainlink, Diplomat & Security | Johnstone Fencing",
    description:
      "Fencing Southern Highlands NSW — chainlink, diplomat and security fencing for Bowral, Mittagong, rural blocks and acreage. Free quotes.",
    ogDesc: "Chainlink, diplomat and security fencing across the Southern Highlands and surrounding villages.",
    twitterDesc: "Fencing Bowral, Mittagong and the Southern Highlands. Licensed and insured.",
    intro:
      "The Southern Highlands mix rural acreage, equestrian properties and village streetscapes. We install chainwire for long boundaries, diplomat fencing for frontages and security systems for rural commercial yards — with gates sized for vehicles and machinery.",
    suburbs: `<ul>
            <li><strong>Main towns:</strong> Bowral, Mittagong, Moss Vale, Berrima</li>
            <li><strong>Villages:</strong> Burradoo, Bundanoon, Robertson, Exeter</li>
            <li><strong>Rural corridors:</strong> Sutton Forest, Avoca, Fitzroy Falls area</li>
            <li><strong>Growth:</strong> Highlands estate developments and lifestyle blocks</li>
          </ul>`,
    chainlink:
      "Chainlink suits rural boundaries, machinery yards and livestock divisions across the Highlands. We plan strainers and gates for long runs on sloping ground.",
    diplomat:
      "Diplomat tubular fencing provides a refined finish for village frontages, schools and strata where presentation matters alongside security.",
    security:
      "Security fencing for rural commercial yards, storage compounds and higher-risk sites — robust mesh, toppings and integrated access points.",
    faq1q: "Do you install fencing across the Southern Highlands?",
    faq1a:
      "Yes. We service Bowral, Mittagong, Moss Vale and surrounding villages for chainlink, diplomat and security fencing projects.",
    faq2q: "What fencing types do you offer in the Highlands?",
    townLabel: "town or village",
    cta: "Need fencing in the Southern Highlands?",
    prefix: "sh",
  },
};

const template = fs.readFileSync(path.join(root, "greater-sydney.html"), "utf8");

for (const [file, r] of Object.entries(regions)) {
  let html = template
    .replace(/Greater Sydney/g, r.name)
    .replace(/greater-sydney/g, r.slug)
    .replace(/gs-/g, `${r.prefix}-`)
    .replace(/"gs-cta"/g, `"${r.prefix}-cta"`);

  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${r.title}</title>`
  );
  html = html.replace(
    /name="description"\s+content="[^"]*"/,
    `name="description"\n      content="${r.description}"`
  );
  html = html.replace(
    /property="og:description"\s+content="[^"]*"/,
    `property="og:description"\n      content="${r.ogDesc}"`
  );
  html = html.replace(
    /name="twitter:description"\s+content="[^"]*"/,
    `name="twitter:description"\n      content="${r.twitterDesc}"`
  );
  html = html.replace(
    /property="og:title" content="[^"]*"/,
    `property="og:title" content="Fencing ${r.short} | Chainlink, Diplomat &amp; Security"`
  );
  html = html.replace(
    /name="twitter:title" content="[^"]*"/,
    `name="twitter:title" content="Fencing ${r.short} | Johnstone Fencing"`
  );

  const bodyStart = html.indexOf("<section class=\"section section-alt\">");
  const bodyEnd = html.indexOf("<section class=\"cta-band\"");
  const newBody = `      <section class="section section-alt">
        <div class="container prose prose-wide">
          <p>${r.intro}</p>
          <h2>Towns and suburbs we quote regularly</h2>
          <p>Common enquiry areas include:</p>
          ${r.suburbs}
          <p>
            If your ${r.townLabel} is in the ${r.name}, send your address, approximate metres and site photos via our
            <a href="/contact">quote form</a> or call <a href="tel:+61400755781">0400 755 781</a>.
          </p>

          <h2 id="${r.prefix}-chainlink">Chainlink fencing — ${r.short}</h2>
          <p>${r.chainlink} <a href="/services#chainlink">Full chainlink specifications</a>.</p>

          <h2 id="${r.prefix}-diplomat">Diplomat fencing — ${r.short}</h2>
          <p>${r.diplomat} <a href="/services#diplomat">See diplomat options</a>.</p>

          <h2 id="${r.prefix}-security">Security fencing — ${r.short}</h2>
          <p>${r.security} <a href="/services#security">Security fencing details</a>.</p>

          <h2>${r.short} fencing FAQs</h2>
          <h3>${r.faq1q}</h3>
          <p>${r.faq1a}</p>
          <h3>${r.faq2q}</h3>
          <p>We specialise in three systems only: chainlink (chainwire), diplomat tubular fencing, and security perimeter fencing, including matching gates where required.</p>
        </div>
      </section>

      `;

  html = html.slice(0, bodyStart) + newBody + html.slice(bodyEnd);

  html = html.replace(
    /<h2 id="[^"]*-cta">Need fencing[^<]*<\/h2>/,
    `<h2 id="${r.prefix}-cta">${r.cta}</h2>`
  );

  html = html.replace(
    /"name": "Do you install fencing across all of[^"]*"/,
    `"name": "${r.faq1q}"`
  );
  html = html.replace(
    /"text": "Yes\. We quote and install chainlink, diplomat and security fencing across[^"]*"/,
    `"text": "${r.faq1a}"`
  );
  html = html.replace(
    /"name": "What fencing types do you offer in Sydney\?"/,
    `"name": "${r.faq2q}"`
  );

  html = html.replace(
    new RegExp(`<li><a href="/${r.slug}" aria-current="page">${r.name}</a></li>\\s*<li><a href="/central-coast">`),
    `<li><a href="/greater-sydney">Greater Sydney</a></li>
            <li><a href="/central-coast">Central Coast</a></li>
            <li><a href="/${r.slug}" aria-current="page">${r.name === "Newcastle & Hunter" ? "Newcastle &amp; Hunter" : r.name}</a></li>
            <li><a href="/`
  );

  const footerAreas =
    r.slug === "newcastle"
      ? `<li><a href="/greater-sydney">Greater Sydney</a></li>
            <li><a href="/central-coast">Central Coast</a></li>
            <li><a href="/newcastle" aria-current="page">Newcastle &amp; Hunter</a></li>
            <li><a href="/southern-highlands">Southern Highlands</a></li>`
      : `<li><a href="/greater-sydney">Greater Sydney</a></li>
            <li><a href="/central-coast">Central Coast</a></li>
            <li><a href="/newcastle">Newcastle &amp; Hunter</a></li>
            <li><a href="/southern-highlands" aria-current="page">Southern Highlands</a></li>`;

  html = html.replace(
    /<h3>Service areas<\/h3>\s*<ul>[\s\S]*?<\/ul>/,
    `<h3>Service areas</h3>
          <ul>
            ${footerAreas}
          </ul>`
  );

  html = html.split("<motion div").join("<div").split("</motion>").join(String.fromCharCode(60, 47, 100, 105, 118, 62));

  fs.writeFileSync(path.join(root, `${file}.html`), html);
  console.log("Wrote", file);
}
