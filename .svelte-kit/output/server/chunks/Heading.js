import { a7 as attributes, c as clsx } from "./index.js";
import { c as cn } from "./Container.js";
function Heading($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "default",
      class: className = "",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const sizes = {
      sm: "text-xl",
      default: "text-2xl md:text-3xl",
      lg: "text-3xl md:text-4xl",
      xl: "text-4xl md:text-5xl"
    };
    $$renderer2.push(`<h2${attributes({
      class: clsx(cn("font-bold tracking-tight", sizes[size], className)),
      ...restProps
    })}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></h2>`);
  });
}
export {
  Heading as H
};
