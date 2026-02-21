import { b as spread_props, a6 as derived } from "./index.js";
import { C as Card } from "./card.js";
import { c as cn } from "./Container.js";
function Card_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      hoverable = false,
      class: className = "",
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let hoverClasses = derived(() => hoverable ? "hover:bg-muted cursor-pointer transition-colors" : "");
    let classes = derived(() => cn(hoverClasses(), className));
    Card($$renderer2, spread_props([
      { class: classes() },
      restProps,
      {
        children: ($$renderer3) => {
          if (children) {
            $$renderer3.push("<!--[-->");
            children($$renderer3);
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
export {
  Card_1 as C
};
