import { a7 as attributes, c as clsx$1 } from "./index.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Container($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      size = "default",
      class: className = "",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const sizes = { sm: "max-w-2xl", default: "max-w-6xl", lg: "max-w-7xl" };
    $$renderer2.push(`<div${attributes({
      class: clsx$1(cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)),
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
  Container as C,
  cn as c
};
