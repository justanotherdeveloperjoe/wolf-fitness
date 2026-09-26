<div align="center">

<img src="images/logo.png" alt="Wolf Fitness logo" width="110">

# Wolf Fitness

**Entrena sin excusas**<br>
Single-page landing site for a gym in Ciudad de Allende, Nuevo León, México.

<br>

[![Live site](https://img.shields.io/badge/View_live_site-→-76b900?style=for-the-badge)](https://justanotherdeveloperjoe.github.io/wolf-fitness/)
[![Instagram](https://img.shields.io/badge/@wolffitnesskys-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/wolffitnesskys/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![three.js](https://img.shields.io/badge/three.js_+_Vanta-000000?style=flat-square&logo=threedotjs&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

<br>

<img src="docs/preview.jpg" alt="Wolf Fitness website on desktop and mobile" width="100%">

</div>

<br>

## <img src="docs/icons/dumbbell.svg" width="24" height="24" align="top" alt=""> At a glance

| | |
|---|---|
| **Sections** | Inicio · Beneficios · Instalaciones · Precios · Ubicación · CTA |
| **Plans** | Visita **$50** · Semana **$200** · Mensualidad **$600** MXN (sin inscripción) |
| **Hours** | Horario corrido, 7 A.M. – 10 P.M. |
| **Design** | Dark green/black, based on the NVIDIA DESIGN.md system and adapted to the gym's brand |

## <img src="docs/icons/sparkles.svg" width="24" height="24" align="top" alt=""> Features

| | |
|---|---|
| <img src="docs/icons/network.svg" width="18" height="18" align="top" alt=""> **Vanta NET background** | Animated green network behind the final CTA. It's lazy-loaded only on screens wider than 768px. |
| <img src="docs/icons/film.svg" width="18" height="18" align="top" alt=""> **Scroll reveals** | Titles, cards and gallery tiles fade up, and grid items stagger in sequence. |
| <img src="docs/icons/trending-up.svg" width="18" height="18" align="top" alt=""> **Price count-up** | Plan prices count up from 0 when their card appears. |
| <img src="docs/icons/megaphone.svg" width="18" height="18" align="top" alt=""> **Marquee tickers** | Scrolling strips with the key selling points and prices. |
| <img src="docs/icons/mouse-pointer-click.svg" width="18" height="18" align="top" alt=""> **Hover polish** | Cards lift and primary buttons glow. Both are pure CSS. |
| <img src="docs/icons/message-circle.svg" width="18" height="18" align="top" alt=""> **WhatsApp everywhere** | Floating button, plus a CTA on every plan. |
| <img src="docs/icons/accessibility.svg" width="18" height="18" align="top" alt=""> **Accessible motion** | `prefers-reduced-motion` skips every animation. A `<noscript>` rule shows everything when JS is off. |

## <img src="docs/icons/rocket.svg" width="24" height="24" align="top" alt=""> Run locally

Static site. Open `index.html`, or serve the folder:

```bash
npx serve .
```

## <img src="docs/icons/folder-tree.svg" width="24" height="24" align="top" alt=""> Project structure

```
wolf-fitness/
├── index.html        Page markup (Spanish)
├── css/
│   └── styles.css    All styles (design tokens in :root)
├── js/
│   ├── main.js       Mobile nav, reveals, count-up, Vanta init
│   └── vendor/       three.js r134 + Vanta NET
├── images/           Optimized photos + logo (transparent PNG)
└── docs/             README preview
```

## <img src="docs/icons/list-checks.svg" width="24" height="24" align="top" alt=""> Pending before delivery

- [ ] **WhatsApp number:** replace every `520000000000` in `index.html` with the real number (`52` + 10 digits).
- [ ] **Facebook URL:** the footer links to the generic `facebook.com`. Swap in the gym's page.
- [ ] **Weekend hours:** the table shows 7 A.M. – 10 P.M. all 7 days. Confirm Saturday and Sunday with the client.
- [ ] **Map pin:** check that the Google Maps embed lands on Dr. Mier 404. Switch to exact coordinates if it's off.

<details>
<summary><b><img src="docs/icons/wrench.svg" width="18" height="18" align="top" alt=""> Maintenance notes</b></summary>

<br>

- **Prices** also appear in the two marquee tickers and the CTA trust line, so update all of them when prices change.
- **Dark map:** the map iframe has a CSS filter (`.map-embed iframe` in `styles.css`). Remove it for a normal colored map.
- **Vanta:** `main.js` lazy-loads the vendor scripts only on viewports wider than 768px and skips them for `prefers-reduced-motion` users. The CSS radial glow is the fallback in both cases. Tune the effect in the `VANTA.NET({...})` call.
- **Reveals:** handled by `[data-reveal]` + `IntersectionObserver` in `main.js`. The stagger delays are the `.reveal-grid` nth-child rules in `styles.css`. Count-up values live in `.count-value[data-count-to]`.

</details>
