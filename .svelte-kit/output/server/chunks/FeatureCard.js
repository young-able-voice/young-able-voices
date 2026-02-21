import { s as sanitize_props, b as spread_props, d as slot, f as attr, g as escape_html } from "./index.js";
import { C as Card_1 } from "./Card2.js";
import { I as Icon } from "./Icon.js";
function Arrow_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function FeatureCard($$renderer, $$props) {
  let { title, description, href, icon } = $$props;
  $$renderer.push(`<a${attr("href", href)}>`);
  Card_1($$renderer, {
    hoverable: true,
    class: "group h-full p-6",
    children: ($$renderer2) => {
      if (icon) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-2xl transition-colors group-hover:bg-accent-foreground/10">${escape_html(icon)}</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <h3 class="text-lg font-semibold transition-colors group-hover:text-accent-foreground">${escape_html(title)}</h3> <p class="mt-2 text-sm text-muted-foreground">${escape_html(description)}</p> <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent-foreground">Learn more `);
      Arrow_right($$renderer2, { class: "h-4 w-4" });
      $$renderer2.push(`<!----></span>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></a>`);
}
export {
  FeatureCard as F
};
