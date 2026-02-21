import { g as escape_html, a7 as attributes, c as clsx } from "./index.js";
import "clsx";
import { C as Container, c as cn } from "./Container.js";
function Hero($$renderer, $$props) {
  let { title, subtitle, ctaText, ctaHref } = $$props;
  $$renderer.push(`<section class="border-b py-16 md:py-20">`);
  Container($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="mx-auto max-w-3xl text-center"><h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">${escape_html(title)}</h1> `);
      if (subtitle) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="relative mt-4 inline-block text-lg font-medium text-accent-foreground md:text-xl"><span class="absolute inset-0 blur-xl bg-accent-foreground/20"></span> <span class="relative">${escape_html(subtitle)}</span></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></section>`);
}
function Section($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      background = "default",
      class: className = "",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const backgrounds = {
      default: "bg-background",
      muted: "bg-muted",
      primary: "bg-primary text-primary-foreground",
      accent: "bg-accent/10"
    };
    $$renderer2.push(`<section${attributes({
      class: clsx(cn("py-16 md:py-24", backgrounds[background], className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section>`);
  });
}
export {
  Hero as H,
  Section as S
};
