import { a7 as attributes, c as clsx } from "./index.js";
import { c as cn } from "./Container.js";
function Card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<div${attributes({
      class: clsx(cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)),
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
export {
  Card as C
};
