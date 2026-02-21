import { a7 as attributes, c as clsx } from "./index.js";
import { c as cn } from "./Container.js";
function Separator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      orientation = "horizontal",
      decorative = true,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      role: decorative ? "none" : "separator",
      "aria-orientation": decorative ? void 0 : orientation,
      class: clsx(cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)),
      ...restProps
    })}></div>`);
  });
}
export {
  Separator as S
};
