import { a7 as attributes, c as clsx, h as head } from "../../../../chunks/index.js";
import "clsx";
import { c as cn, C as Container } from "../../../../chunks/Container.js";
import { H as Hero, S as Section } from "../../../../chunks/Section.js";
function Prose($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className = "",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(cn("prose prose-lg max-w-none", "prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground", "prose-h2:mt-12 prose-h2:text-2xl", "prose-p:text-foreground/80 prose-p:leading-relaxed", "prose-a:text-primary prose-a:no-underline hover:prose-a:underline", "prose-strong:text-foreground", className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("6qg4mp", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>My Speech Journey - Young Able Voices</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Follow Elina's personal journey with childhood apraxia of speech."/>`);
  });
  Hero($$renderer, {
    title: "My Speech Journey",
    subtitle: "A personal story of perseverance and growth"
  });
  $$renderer.push(`<!----> `);
  Section($$renderer, {
    children: ($$renderer2) => {
      Container($$renderer2, {
        size: "sm",
        children: ($$renderer3) => {
          Prose($$renderer3, {
            children: ($$renderer4) => {
              children($$renderer4);
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
