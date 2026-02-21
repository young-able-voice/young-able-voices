import { a as attr_class, c as clsx, s as sanitize_props, b as spread_props, d as slot, e as ensure_array_like, f as attr, g as escape_html, h as head } from "../../chunks/index.js";
import { B as Button, a as Button_1 } from "../../chunks/Button.js";
import "clsx";
import { c as cn, C as Container } from "../../chunks/Container.js";
import { I as Icon } from "../../chunks/Icon.js";
import { F as Facebook, I as Instagram } from "../../chunks/instagram.js";
function getSystemTheme() {
  return "light";
}
function getStoredTheme() {
  return "system";
}
function applyTheme(theme2) {
  return;
}
class ThemeStore {
  value = getStoredTheme();
  resolved = "light";
  constructor() {
  }
  set(theme2) {
    this.value = theme2;
    this.resolved = theme2 === "system" ? getSystemTheme() : theme2;
    applyTheme(this.resolved);
  }
  toggle() {
    const next = this.resolved === "light" ? "dark" : "light";
    this.set(next);
  }
}
const theme = new ThemeStore();
function Logo($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { light = false, class: className = "" } = $$props;
    $$renderer2.push(`<div${attr_class(clsx(cn("flex items-center gap-3", className)))}><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-foreground font-bold text-background">YAV</div> <span${attr_class(clsx(cn("text-lg font-semibold", light ? "text-primary-foreground" : "text-foreground")))}>Young Able Voices</span></div>`);
  });
}
function Sun($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sun" },
    $$sanitized_props,
    {
      /**
       * @component @name Sun
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
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
function Moon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "moon" },
    $$sanitized_props,
    {
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
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
function ThemeToggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className = "" } = $$props;
    Button($$renderer2, {
      variant: "outline",
      size: "icon",
      onclick: () => theme.toggle(),
      class: className,
      "aria-label": "Toggle theme",
      children: ($$renderer3) => {
        if (theme.resolved === "dark") {
          $$renderer3.push("<!--[-->");
          Sun($$renderer3, { class: "h-4 w-4" });
        } else {
          $$renderer3.push("<!--[!-->");
          Moon($$renderer3, { class: "h-4 w-4" });
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
  });
}
function Menu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M4 5h16" }],
    ["path", { "d": "M4 12h16" }],
    ["path", { "d": "M4 19h16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "menu" },
    $$sanitized_props,
    {
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
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
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
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
function Chevron_down($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-down" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
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
function Nav($$renderer) {
  let mobileMenuOpen = false;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/programs",
      label: "Programs",
      children: [
        { href: "/programs/weekly-chats", label: "Weekly Chats" },
        { href: "/programs/one-on-one", label: "One-on-One" },
        { href: "/programs/specialized", label: "Specialized Chats" }
      ]
    },
    { href: "/resources", label: "Resources" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" }
  ];
  $$renderer.push(`<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"><div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"><a href="/" class="flex items-center gap-2">`);
  Logo($$renderer, {});
  $$renderer.push(`<!----></a> <nav class="hidden items-center gap-1 lg:flex"><!--[-->`);
  const each_array = ensure_array_like(navLinks);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let link = each_array[$$index_1];
    if (link.children) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div class="relative group"><a${attr("href", link.href)} class="inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground">${escape_html(link.label)} `);
      Chevron_down($$renderer, { class: "h-4 w-4" });
      $$renderer.push(`<!----></a> <div class="invisible absolute left-0 top-full z-50 mt-1 w-48 rounded-md border bg-popover p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100"><!--[-->`);
      const each_array_1 = ensure_array_like(link.children);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let child = each_array_1[$$index];
        $$renderer.push(`<a${attr("href", child.href)} class="block rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-accent hover:text-foreground">${escape_html(child.label)}</a>`);
      }
      $$renderer.push(`<!--]--></div></div>`);
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push(`<a${attr("href", link.href)} class="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground">${escape_html(link.label)}</a>`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></nav> <div class="flex items-center gap-2">`);
  Button_1($$renderer, {
    class: "hidden h-9 sm:inline-flex",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Donate`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  ThemeToggle($$renderer, { class: "h-9 w-9" });
  $$renderer.push(`<!----> `);
  Button_1($$renderer, {
    variant: "ghost",
    size: "icon",
    class: "h-9 w-9 lg:hidden",
    onclick: () => mobileMenuOpen = !mobileMenuOpen,
    children: ($$renderer2) => {
      if (mobileMenuOpen) {
        $$renderer2.push("<!--[-->");
        X($$renderer2, { class: "h-5 w-5" });
      } else {
        $$renderer2.push("<!--[!-->");
        Menu($$renderer2, { class: "h-5 w-5" });
      }
      $$renderer2.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></div></div> `);
  if (mobileMenuOpen) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="border-t bg-card lg:hidden"><div class="mx-auto max-w-6xl space-y-1 px-4 py-4"><!--[-->`);
    const each_array_2 = ensure_array_like(navLinks);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let link = each_array_2[$$index_3];
      if (link.children) {
        $$renderer.push("<!--[-->");
        $$renderer.push(`<div class="space-y-1"><a${attr("href", link.href)} class="block rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-accent">${escape_html(link.label)}</a> <div class="ml-4 space-y-1 border-l pl-3"><!--[-->`);
        const each_array_3 = ensure_array_like(link.children);
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          let child = each_array_3[$$index_2];
          $$renderer.push(`<a${attr("href", child.href)} class="block rounded-md px-3 py-2 text-sm text-foreground/60 hover:bg-accent">${escape_html(child.label)}</a>`);
        }
        $$renderer.push(`<!--]--></div></div>`);
      } else {
        $$renderer.push("<!--[!-->");
        $$renderer.push(`<a${attr("href", link.href)} class="block rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-accent">${escape_html(link.label)}</a>`);
      }
      $$renderer.push(`<!--]-->`);
    }
    $$renderer.push(`<!--]--> `);
    Button_1($$renderer, {
      class: "mt-4 h-9 w-full sm:hidden",
      children: ($$renderer2) => {
        $$renderer2.push(`<!---->Donate`);
      },
      $$slots: { default: true }
    });
    $$renderer.push(`<!----></div></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></header>`);
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="border-t bg-card">`);
    Container($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-8 py-12 md:grid-cols-4"><div class="md:col-span-2">`);
        Logo($$renderer3, {});
        $$renderer3.push(`<!----> <p class="mt-4 max-w-sm text-sm text-muted-foreground">A safe place for kids with hidden disabilities to connect, and know they aren't alone. Your future
					is bright.</p> <div class="mt-6 flex items-center gap-3"><a href="https://www.facebook.com/youngablevoices/" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground" aria-label="Facebook">`);
        Facebook($$renderer3, { class: "h-4 w-4" });
        $$renderer3.push(`<!----></a> <a href="https://instagram.com/young_able_voices" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground" aria-label="Instagram">`);
        Instagram($$renderer3, { class: "h-4 w-4" });
        $$renderer3.push(`<!----></a> <a href="https://tiktok.com/@youngablevoices" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:text-accent-foreground" aria-label="TikTok"><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path></svg></a></div></div> <div><h3 class="mb-3 text-sm font-semibold">Programs</h3> <ul class="space-y-2 text-sm"><li><a href="/programs/weekly-chats" class="text-muted-foreground transition-colors hover:text-foreground">Weekly Chats</a></li> <li><a href="/programs/one-on-one" class="text-muted-foreground transition-colors hover:text-foreground">One-on-One</a></li> <li><a href="/programs/specialized" class="text-muted-foreground transition-colors hover:text-foreground">Specialized Chats</a></li></ul></div> <div><h3 class="mb-3 text-sm font-semibold">Connect</h3> <ul class="space-y-2 text-sm"><li><a href="/contact" class="text-muted-foreground transition-colors hover:text-foreground">Contact Us</a></li> <li><a href="/media" class="text-muted-foreground transition-colors hover:text-foreground">Press &amp; Media</a></li></ul></div></div> <div class="border-t py-6 text-center text-xs text-muted-foreground"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Young Able Voices. All rights reserved.</p> <p class="mt-1">Peer-to-peer support group. Not licensed therapists.</p></div>`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<script>
		(function() {
			const theme = localStorage.getItem('yav-theme') || 'system';
			const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
			if (isDark) {
				document.documentElement.classList.add('dark');
			}
		})();
	<\/script>`);
      $$renderer3.push(`<!---->`);
    });
    $$renderer2.push(`<div class="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">`);
    Nav($$renderer2);
    $$renderer2.push(`<!----> <main class="flex-1">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
