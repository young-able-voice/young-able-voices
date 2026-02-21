import { f as attr, a as attr_class, c as clsx, a7 as attributes, a6 as derived, b as spread_props } from "./index.js";
import { c as cn } from "./Container.js";
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      variant = "default",
      size = "default",
      href,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const baseVariant = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer";
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    };
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    };
    let classes = derived(() => cn(baseVariant, variants[variant], sizes[size], className));
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", href)}${attr_class(clsx(classes()))}>`);
      if (children) {
        $$renderer2.push("<!--[-->");
        children($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ class: clsx(classes()), ...restProps })}>`);
      if (children) {
        $$renderer2.push("<!--[-->");
        children($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Button_1($$renderer, $$props) {
  let {
    variant = "default",
    size = "default",
    href,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  Button($$renderer, spread_props([
    { variant, size, href, class: className },
    restProps,
    {
      children: ($$renderer2) => {
        if (children) {
          $$renderer2.push("<!--[-->");
          children($$renderer2);
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
export {
  Button as B,
  Button_1 as a
};
